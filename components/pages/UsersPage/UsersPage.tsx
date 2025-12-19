import UsersComponent from "../../users/users-component/users-component.tsx";
import PaginationComponent from "../../paginations/pagination-component.tsx";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>

            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;