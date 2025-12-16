import type {FC} from "react";
import type IUserDummy from "../../models/dummy/user/IUserDummy.ts";

type PropsUser = {
    user:IUserDummy
}
const ShowUserDummy:FC<PropsUser> = ({user}) => {
    return (
        <div className="p-3 text-center bg-amber-100 w-1/2 mt-1">
            <div> {user.firstName}</div>
            <div> {user.lastName}</div>
            <div> {user.email}</div>
            <div> {user.age}</div>
            <div> {user.address.address}</div>
            <div> {user.userAgent}</div>
            <div> {user.bank.iban}</div>
            <div> {user.company.name}</div>
            <div> {user.phone}</div>

        </div>
    );
};

export default ShowUserDummy;