import {useEffect, useState} from "react";
import type IComments from "../../models/IComments.ts";
import {getComments} from "../../services/api.service.ts";
import CommentComponent from "../CommentComponent/CommentComponent.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComments[]>([]);

    useEffect(() => {
        getComments().then(comments => setComments(comments));
    }, []);

    return (
        <div className="flex flex-wrap">
            {comments.map((comment) => <CommentComponent key={comment.id} comment={comment} /> )}
        </div>
    );
};

export default CommentsComponent;