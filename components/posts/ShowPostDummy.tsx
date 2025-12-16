import type {FC} from "react";
import type IPostDummy from "../../models/dummy/post/IPostDummy.ts";

type PropPost = {
    post: IPostDummy
}
const ShowPostDummy:FC<PropPost> = ({post}) => {

    return (
        <div className="border-b mb-8 mt-8">
            {JSON.stringify(post)}
        </div>
    );
};

export default ShowPostDummy;