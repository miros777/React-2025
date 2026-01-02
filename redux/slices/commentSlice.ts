import {createAsyncThunk, createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type IComment from "../../models/IComment.ts";
import {getData} from "../../services/api.services.ts";

type CommetSliceType = {
    comments:IComment[]
}
const initialState:CommetSliceType = {comments:[]};

const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comment = await getData<IComment[]>('/comments')

            return thunkAPI.fulfillWithValue(comment)
        }
        catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('Could not load comments');
        }
    }
)

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
            .addMatcher(isRejected(loadComments), (state) => {
                console.log(state);
            })
    }

});

export const commentsSliceActions = {
    ...commentSlice.actions, loadComments
}