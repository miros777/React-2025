import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {postSliceActions} from "../../redux/slices/postSlice.tsx";
import {useEffect} from "react";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {

    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);
    return (
        <div>
            {posts && posts.map(post =>
                <PostComponent key={post.id} post={post} />
            )}
        </div>
    );
};

export default PostsComponent;