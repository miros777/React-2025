import type ICommentDummy from "../../models/dummy/comment/ICommentDummy";
import type {FC} from "react";

type PropsComment = {
    comment: ICommentDummy
}
const ShowCommentDummy:FC<PropsComment> = ({comment}) => {
    return (
        <div className="border-b mb-8 mt-8">
            {JSON.stringify(comment)}
        </div>
    );
};

export default ShowCommentDummy;