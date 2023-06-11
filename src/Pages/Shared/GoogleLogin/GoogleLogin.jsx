import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);

            const saveUser = {name: loggedInUser.displayName, email:loggedInUser.email}
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(() => {
           navigate(from, {replace: true});
          }
        )

     

        })
    }
    return (
        <div>

              <div className="divider"></div>
            <div className="text-center my-4">
            <h3 className="text-xl font-semibold">Connect With</h3>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default GoogleLogin;