import type {FC} from "react";
import type IUser from "../../../models/IUser.ts";

type PropsUser = {
    user: IUser;
}
const UserComponent:FC<PropsUser> = ({user}) => {
    return (
        <div key={user.id}>
            <div>{user.firstName}</div>
            <div>ID: {user.id}</div>
        </div>
    );
};

export default UserComponent;