import {useEffect, useState} from "react";
import {getComments} from "../../services/api.service.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";
import type {IComment} from "../../models/IComment.ts";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments().then(comments => {
            setComments(comments ?? []); // якщо data.comments undefined, ставимо пустий масив
        }).catch(err => {
            console.error(err);
            setComments([]); // на випадок помилки
        });
    }, []);


    return (
        <div className="flex flex-wrap">
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)
            }
        </div>
    );
};

export default CommentsComponent;