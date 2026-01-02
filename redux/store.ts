import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "./slices/commentSlice.ts";
import {postSlice} from "./slices/postSlice.ts";
import {userSlice} from "./slices/userSlice.ts";


export const store = configureStore({

    reducer: {
        commentSlice: commentSlice.reducer,
        postSlice: postSlice.reducer,
        userSlice: userSlice.reducer
    },

});
