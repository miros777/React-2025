import type {FC} from "react";
import type IUser from "../../models/IUser.ts";

type UserComponentProps ={
    user: IUser
}
const UserComponent:FC<UserComponentProps> = ({user}) => {
    return (
        <div className="border-2 border-amber-200">
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.phone}</div>
        </div>
    );
};

export default UserComponent;