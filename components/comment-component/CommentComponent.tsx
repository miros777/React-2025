import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";

type PropsComments = {
    comment: IComment;
}
const CommentComponent:FC<PropsComments> = ({comment: {body, likes, user}}) => {
    return (
        <div className="bg-indigo-300 text-black p-6 m-2 w-80">
            <div className="font-bold">{body}</div>
            <div className="italic text-red-600">{likes}</div>
            <div className="flex fl">
                <div>{user.fullName}</div>
                <div>{user.username}</div></div>
        </div>
    );
};

export default CommentComponent;