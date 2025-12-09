import type IPostModel from "../../models/PostModel.ts";
import type {FC} from "react";

type PropsPost = {
    post: IPostModel
}

const PostComponent:FC<PropsPost> = ({post}) => {
    return (
        <div className="bg-indigo-300 border-b-blue-400 p-3 mb-2 text-center font-bold">
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostComponent;