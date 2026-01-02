import {useDispatch} from "react-redux";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceAction} from "../redux/slices/userSlice.ts";
import {commentsSliceActions} from "../redux/slices/commentSlice.ts";
import {postSliceActions} from "../redux/slices/postSlice.ts";

const ComplexPage = () => {
    const dispatch = useDispatch();
    const {commentSlice: {comments}, postSlice: {posts}, userSlice: {users}} = useAppSelector(state => state);

    useEffect(() => {

        if (!users.length) {
            // @ts-ignore
            dispatch(userSliceAction.loadUsers())
        }
        if (!comments.length) {
            // @ts-ignore
            dispatch(commentsSliceActions.loadComments())
        }
        if (!posts.length) {
            // @ts-ignore
            dispatch(postSliceActions.loadPosts())
        }

    }, []);

    console.log(users);
    console.log(posts);
    console.log(comments);

    return (
        <div>

        </div>
    );
};

export default ComplexPage;