import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import { useState } from "react";
import { useEffect } from "react";


const SignUp = () => {

    const [password, setPassword] = useState();
    const [confirmation, setConfirmation] = useState();
    const [match, setMatch] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
          .then(() =>{
            const saveUser = {name: data.name, email:data.email}
            fetch('https://windbag-prime-academy-server-tauft-aolcom.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-middle',
                  icon: 'success',
                  title: 'User created successfully',
                  showConfirmButton:false,
                  timer: 2000
                })
    
              }
            })
            navigate('/')
          })
          .catch(error =>console.log(error))
        })
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleConfirmationChange = (event) => {
        setConfirmation(event.target.value);
      };
      useEffect(() => {
        setMatch(password === confirmation);
      }, [password, confirmation]);

    return (
        <div>
            <form onSubmit={ handleSubmit(onSubmit)} className="w-1/2">
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" {...register("name", { required: true })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" Enter Your Name" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" {...register("email", { required: true })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password"  onChange={handlePasswordChange} {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">password must be 6 characters</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600">password must be less than 20 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">password must have one uppercase, one lowercase, one number and one special character</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <input type="password"  onChange={handleConfirmationChange} id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    {match ? <p className="text-green-600">Passwords match!</p> : <p className="text-red-600">Passwords do not match!</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                    <input type="text" {...register("photoURL", { required: true })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <div className="flex">
                        <label className="label cursor-pointer">
                            <span className="label-text">Male</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500 ml-2" checked />
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">Female</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500 ml-2" checked />
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                    <input type="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+8801710000000" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input type="text"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
            
            <GoogleLogin></GoogleLogin>

        </div>

    );
};

export default SignUp;