import {createAsyncThunk, createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type IPost from "../../models/IPost";
import {getData} from "../../services/api.services";

type PostSliceType = {
    posts: IPost[]
}
const initialState:PostSliceType = {posts: []}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {

        try {
            const  posts = await getData<IPost[]>('/posts');
            return thunkAPI.fulfillWithValue(posts)
        }
        catch(error){
            console.log(error)
            return thunkAPI.rejectWithValue('Could not load posts')
        }
})
export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {},
    extraReducers:
        builder => {
            builder
                .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts = action.payload
            }, )
                .addMatcher(isRejected(loadPosts), (state, action) => {
                    console.log(state, action.payload)
                })

    },
});

export const postSliceActions = {
    ...postSlice.actions, loadPosts
}