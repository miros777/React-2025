import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceAction} from "../../redux/slices/userSlice.ts";
import UserComponent from "./UserComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

const UsersComponent = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceAction.loadUsers())
    },[]);

    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} user={user} />)}
        </div>
    );
};

export default UsersComponent;