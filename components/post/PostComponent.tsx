import type {FC} from "react";
import type IPost from "../../models/IPost.ts";

type PostComponentProps = {
    post: IPost;
}
const PostComponent:FC<PostComponentProps> = ({post}) => {
    return (
        <div>
            <div key={post.id}>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
        </div>
    );
};

export default PostComponent;