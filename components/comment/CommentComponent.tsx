import type {FC} from "react";
import type IComment from "../../models/IComment.ts";

type CommentProps = {
    comment: IComment;
}
const CommentComponent:FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <div>{comment.id}</div>
            <div>{comment.body}</div>
            <div>{comment.email}</div>
            <div>{comment.name}</div>
            <div>{comment.postId}</div>
        </div>
    );
};

export default CommentComponent;