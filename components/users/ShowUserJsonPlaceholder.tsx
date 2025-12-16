import type {FC} from "react";
import type IUserJsonPlaceholder from "../../models/jsonplaceholder/user/IUserJsonPlaceholder.ts";

type PropsUser = {
    user: IUserJsonPlaceholder
}
const ShowUserJsonPlaceholder:FC<PropsUser> = ({user}) => {
    return (
        <div className="p-3 text-center bg-amber-100 w-1/2 mt-1">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
            <div className="bg-blue-500">Address</div>
            <div>{user.address.city}</div>
            <div>{user.address.street}</div>
            <div>{user.address.suite}</div>
            <div>{user.address.zipcode}</div>
            <div className="bg-blue-500">Geo</div>
            <div>{user.address.geo.lng}</div>
            <div>{user.address.geo.lat}</div>
            <div className="bg-blue-500">Company</div>
            <div>{user.company.name}</div>
        </div>
    );
};

export default ShowUserJsonPlaceholder;