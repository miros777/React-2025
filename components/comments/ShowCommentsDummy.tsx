import {useEffect, useState} from "react";
import {commentServicesDummy} from "../../services/api.servises";
import type ICommentDummy from "../../models/dummy/comment/ICommentDummy";
import ShowCommentDummy from "./ShowCommentDummy";

const ShowCommentsDummy = () => {

    const [comments, setComments] = useState<ICommentDummy[]>([]);
    useEffect(() => {
        commentServicesDummy.getComments()
            .then(comments => setComments(comments));
    },[])

    return (
        <div>
            {comments.map((comment, i) => <ShowCommentDummy key={i} comment={comment} />)}
        </div>
    );
};

export default ShowCommentsDummy;