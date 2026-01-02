import {createAsyncThunk, createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type IUser from "../../models/IUser";
import {getData} from "../../services/api.services";

type TypeUserSlice = {
    users: IUser[]
}
const initialState:TypeUserSlice = {users: []}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI)=>{

        try {
            const users = await getData<IUser[]>('/users');
            return thunkAPI.fulfillWithValue(users)
        }catch(error){
            console.log(error)
            return thunkAPI.rejectWithValue('Could not load users')
        }
    })

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers:
        builder => {
            builder
                .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
                .addMatcher(isRejected(loadUsers), (state, action) => {
                    console.log(state, action.payload)
                })
        }
});

export const userSliceAction = {
    ...userSlice.actions, loadUsers
}

