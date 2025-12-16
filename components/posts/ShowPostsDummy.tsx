import { useEffect, useState} from "react";
import {postServicesDummy} from "../../services/api.servises.ts";
import ShowPostDummy from "./ShowPostDummy.tsx";
import type IPostDummy from "../../models/dummy/post/IPostDummy.ts";

const ShowPostsDummy = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);

    useEffect(() => {
        postServicesDummy.getPosts()
            .then(posts => setPosts(posts));
    }, [])

    return (
        <div>
            {posts.map((post) => <ShowPostDummy key={post.id} post={post} />)}
        </div>
    );
};

export default ShowPostsDummy;