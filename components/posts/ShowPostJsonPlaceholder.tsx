import type {FC} from "react";
import type IPostJsonPlaceholder from "../../models/jsonplaceholder/post/IPostJsonPlaceholder";

type PropsPost = {
    post: IPostJsonPlaceholder
}
const ShowPostJsonPlaceholder:FC<PropsPost> = ({post}) => {
    return (
        <div className="border-b mb-8 mt-8">
            {JSON.stringify(post)}
        </div>
    );
};

export default ShowPostJsonPlaceholder;