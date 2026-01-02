import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "./slices/commentSlice.tsx";
import {postSlice} from "./slices/postSlice.tsx";
import {userSlice} from "./slices/userSlice.tsx";

export const store = configureStore({

    reducer: {
        commentSlice: commentSlice.reducer,
        postSlice: postSlice.reducer,
        userSlice: userSlice.reducer
    },

})