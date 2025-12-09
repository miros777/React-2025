import type {FC} from "react";
import type IComments from "../../models/IComments.ts";

type PropsComments = {
    comment: IComments;
}
const CommentComponent:FC<PropsComments> = ({comment: {name, email, body}}) => {
    return (
        <div className="bg-indigo-300 text-black p-6 m-2 w-80">
            <div className="font-bold">{name}</div>
            <div className="italic text-red-600">{email}</div>
            <div>{body}</div>
        </div>
    );
};

export default CommentComponent;