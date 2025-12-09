import type {FC} from "react";
import type IUser from "../../models/UserModel.ts";

type myPropsUser = {
    user: IUser
}
const TodoComponent:FC<myPropsUser> = ({user}) => {
    return (
        <div>
            {user.title}
        </div>
    );
};

export default TodoComponent;