import {useEffect, useState} from "react";
import {commentServicesPlaceholder} from "../../services/api.servises";
import ShowCommentJsonPlaceholder from "./ShowCommentJsonPlaceholder";
import type ICommentJsonPlaceholder from "../../models/jsonplaceholder/comment/ICommentJsonPlaceholder.ts";

const ShowCommentsJsonPlaceholder = () => {
    const [comments, setComments] = useState<ICommentJsonPlaceholder[]>([]);
    useEffect(() => {
        commentServicesPlaceholder.getComments()
            .then(comments => setComments(comments));
    },[]);
    return (
        <div>
            {comments.map((comment, i) => <ShowCommentJsonPlaceholder key={i} comment={comment} />)}
        </div>
    );
};

export default ShowCommentsJsonPlaceholder;