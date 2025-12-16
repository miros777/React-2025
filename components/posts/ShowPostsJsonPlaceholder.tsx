import {useEffect, useState} from 'react';
import type IPostJsonPlaceholder from "../../models/jsonplaceholder/post/IPostJsonPlaceholder";
import {postServicesPlaceholder} from "../../services/api.servises";
import ShowPostJsonPlaceholder from "./ShowPostJsonPlaceholder";

const ShowPostsJsonPlaceholder = () => {

    const [posts, setPosts] = useState<IPostJsonPlaceholder[]>([]);
    useEffect(() => {
        postServicesPlaceholder.getPosts()
            .then(posts => setPosts(posts));
    }, [])
    return (
        <div>
            {posts.map((post, index) => <ShowPostJsonPlaceholder post={post} key={index} />)}
        </div>
    );
};

export default ShowPostsJsonPlaceholder;