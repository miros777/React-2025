import {login} from "../services/api.services.ts";

const LoginPage = () => {
    login(
        {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 1
        }
        );

    const msg = 'Authorization complide';

    return (
        <div>
            Login Page <br/>
            {msg || null}
        </div>
    );
};

export default LoginPage;