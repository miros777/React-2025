import type {FC} from "react";
import type ICommentJsonPlaceholder from "../../models/jsonplaceholder/comment/ICommentJsonPlaceholder.ts";

type PropsComment = {
    comment: ICommentJsonPlaceholder;
}
const ShowCommentJsonPlaceholder:FC<PropsComment> = ({comment}) => {
    return (
        <div className="border-b mb-8 mt-8">
            {comment && JSON.stringify(comment)}
        </div>
    );
};

export default ShowCommentJsonPlaceholder;