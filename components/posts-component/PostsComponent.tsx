import PostComponent from "../post-component/PostComponent";
import {useEffect, useState} from "react";
import type IPostModel from "../../models/PostModel.ts";
import {getPosts} from "../../services/api.service.ts";

const PostsComponent = () => {
    const [posts, setPost] = useState<IPostModel[]>([]);

    useEffect(() => {
            getPosts().then(response => setPost(response))
        }, [])

    return (
        <div>
            {posts.map(post=> <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;