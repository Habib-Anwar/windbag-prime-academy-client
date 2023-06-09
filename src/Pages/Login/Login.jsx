import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext);

    return (
        <div>
            <h3>Please Login</h3>
        </div>
    );
};

export default Login;