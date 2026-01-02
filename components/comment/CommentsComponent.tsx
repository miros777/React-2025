import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import CommentComponent from "./CommentComponent.tsx";
import {commentsSliceActions} from "../../redux/slices/commentSlice.tsx";

const CommentsComponent = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentsSliceActions.loadComments());
    }, []);
    return (
        <div>
            {comments.map((comment, index) => <CommentComponent key={index} comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;