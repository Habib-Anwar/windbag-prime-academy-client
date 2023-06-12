import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [passwordVisible, setPasswordVisible] = useState(false);

    const {signIn, googleSignIn} = useContext(AuthContext);
    const onCommit = data =>{
        signIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: 'Login Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
          navigate(from, {replace: true});
        })
    }

    const handleGoogleSignIn = () =>{
      googleSignIn()
      .then(result =>{
          const loggedInUser = result.user;
          console.log(loggedInUser);

          const saveUser = {name: loggedInUser.displayName, email:loggedInUser.email}
      fetch('https://windbag-prime-academy-server-tauft-aolcom.vercel.app/users', {
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

    return (
        <div>
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                >
                  <div className="mb-10 text-center md:mb-16">
                    <h3 className="text-3xl font-bold">
                        Please Login
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit(onCommit)}>
                  <div className="mb-6">
                 <label className="mb-3 block text-base font-medium text-black text-left">
                 Email
                 </label>
                 <div className="relative">
                    <input type="email" {...register("email", { required: true })} placeholder="info@yourmail.com" className="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"/>
                    {errors.name && <span className="text-red-600">Name is required</span>}
                    <span className="absolute top-1/2 left-4 -translate-y-1/2">
                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.8">
                             <path fillRule="evenodd" clipRule="evenodd" d="M3.33398 4.16667C2.87756 4.16667 2.50065 4.54357 2.50065 5V15C2.50065 15.4564 2.87756 15.8333 3.33398 15.8333H16.6673C17.1238 15.8333 17.5007 15.4564 17.5007 15V5C17.5007 4.54357 17.1238 4.16667 16.6673 4.16667H3.33398ZM0.833984 5C0.833984 3.6231 1.95708 2.5 3.33398 2.5H16.6673C18.0442 2.5 19.1673 3.6231 19.1673 5V15C19.1673 16.3769 18.0442 17.5 16.6673 17.5H3.33398C1.95708 17.5 0.833984 16.3769 0.833984 15V5Z" fill="#637381"></path>
                             <path fillRule="evenodd" clipRule="evenodd" d="M0.984696 4.52154C1.24862 4.14449 1.76823 4.0528 2.14527 4.31673L10.0007 9.81554L17.8562 4.31673C18.2332 4.0528 18.7528 4.14449 19.0167 4.52154C19.2807 4.89858 19.189 5.41818 18.8119 5.68211L10.4786 11.5154C10.1917 11.7163 9.80977 11.7163 9.52284 11.5154L1.1895 5.68211C0.812463 5.41818 0.720767 4.89858 0.984696 4.52154Z" fill="#637381"></path>
                          </g>
                       </svg>
                    </span>
                 </div>
              </div>
                    <div className="mb-6">
                    <div className="w-full">
              <div className="mb-12">
                 <label className="mb-3 block text-base font-medium text-black text-left">
                 Password
                 </label>
                 <div className="relative">
                    <input  type={passwordVisible ? 'text' : 'password'} {...register("password", { required: true })} placeholder="Password" className="w-full rounded-md border border-danger py-3 pl-5 pr-12 text-black placeholder-[#929DA7] outline-none transition"/>
                    <span className="absolute top-1/2 right-4 -translate-y-1/2">
                      <button onClick={togglePasswordVisibility}>
                       <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M9.9987 2.50065C5.85656 2.50065 2.4987 5.85852 2.4987 10.0007C2.4987 14.1428 5.85656 17.5007 9.9987 17.5007C14.1408 17.5007 17.4987 14.1428 17.4987 10.0007C17.4987 5.85852 14.1408 2.50065 9.9987 2.50065ZM0.832031 10.0007C0.832031 4.93804 4.93609 0.833984 9.9987 0.833984C15.0613 0.833984 19.1654 4.93804 19.1654 10.0007C19.1654 15.0633 15.0613 19.1673 9.9987 19.1673C4.93609 19.1673 0.832031 15.0633 0.832031 10.0007Z" fill="#DC3545"></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.0013 5.83398C10.4615 5.83398 10.8346 6.20708 10.8346 6.66732V10.0007C10.8346 10.4609 10.4615 10.834 10.0013 10.834C9.54106 10.834 9.16797 10.4609 9.16797 10.0007V6.66732C9.16797 6.20708 9.54106 5.83398 10.0013 5.83398Z" fill="#DC3545"></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M9.16797 13.3333C9.16797 12.8731 9.54106 12.5 10.0013 12.5H10.0096C10.4699 12.5 10.843 12.8731 10.843 13.3333C10.843 13.7936 10.4699 14.1667 10.0096 14.1667H10.0013C9.54106 14.1667 9.16797 13.7936 9.16797 13.3333Z" fill="#DC3545"></path>
                       </svg>
                       </button>
                    </span>
                 </div>
              </div>
           </div>
                    </div>
                    <div className="mb-10">
                      <input
                        type="submit"
                        value="Login"
                        className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                      />
                    </div>
                  </form>
                  <p className="mb-6 text-base text-[#adadad]">Connect With</p>
                  <ul className="-mx-2 mb-12 flex justify-between">
                    <li className="w-full px-2">
                      <a
                        href="javascript:void(0)"
                        className="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                      >
                        <svg
                          width="10"
                          height="20"
                          viewBox="0 0 10 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="w-full px-2">
                      <a
                        href="javascript:void(0)"
                        className="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90"
                      >
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="w-full px-2">
                      <Link
                         onClick={handleGoogleSignIn}
                        className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                  <a
                    href="javascript:void(0)"
                    className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
                  >
                    Forget Password?
                  </a>
                  <p className="text-base text-[#adadad]">
                    Not a member yet?
                    <Link to="/signup" className="text-primary hover:underline">
                      Sign Up
                    </Link>
                  </p>
                  <div>
                    <span className="absolute top-1 right-1">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.39737"
                          cy="38.6026"
                          r="1.39737"
                          transform="rotate(-90 1.39737 38.6026)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.39737"
                          cy="1.99122"
                          r="1.39737"
                          transform="rotate(-90 1.39737 1.99122)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.6943"
                          cy="38.6026"
                          r="1.39737"
                          transform="rotate(-90 13.6943 38.6026)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.6943"
                          cy="1.99122"
                          r="1.39737"
                          transform="rotate(-90 13.6943 1.99122)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="25.9911"
                          cy="38.6026"
                          r="1.39737"
                          transform="rotate(-90 25.9911 38.6026)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="25.9911"
                          cy="1.99122"
                          r="1.39737"
                          transform="rotate(-90 25.9911 1.99122)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.288"
                          cy="38.6026"
                          r="1.39737"
                          transform="rotate(-90 38.288 38.6026)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.288"
                          cy="1.99122"
                          r="1.39737"
                          transform="rotate(-90 38.288 1.99122)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.39737"
                          cy="26.3057"
                          r="1.39737"
                          transform="rotate(-90 1.39737 26.3057)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.6943"
                          cy="26.3057"
                          r="1.39737"
                          transform="rotate(-90 13.6943 26.3057)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="25.9911"
                          cy="26.3057"
                          r="1.39737"
                          transform="rotate(-90 25.9911 26.3057)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.288"
                          cy="26.3057"
                          r="1.39737"
                          transform="rotate(-90 38.288 26.3057)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.39737"
                          cy="14.0086"
                          r="1.39737"
                          transform="rotate(-90 1.39737 14.0086)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.6943"
                          cy="14.0086"
                          r="1.39737"
                          transform="rotate(-90 13.6943 14.0086)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="25.9911"
                          cy="14.0086"
                          r="1.39737"
                          transform="rotate(-90 25.9911 14.0086)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.288"
                          cy="14.0086"
                          r="1.39737"
                          transform="rotate(-90 38.288 14.0086)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                    <span className="absolute left-1 bottom-1">
                      <svg
                        width="29"
                        height="40"
                        viewBox="0 0 29 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="2.288"
                          cy="25.9912"
                          r="1.39737"
                          transform="rotate(-90 2.288 25.9912)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="25.9911"
                          r="1.39737"
                          transform="rotate(-90 14.5849 25.9911)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="25.9911"
                          r="1.39737"
                          transform="rotate(-90 26.7216 25.9911)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="13.6944"
                          r="1.39737"
                          transform="rotate(-90 2.288 13.6944)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="13.6943"
                          r="1.39737"
                          transform="rotate(-90 14.5849 13.6943)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="13.6943"
                          r="1.39737"
                          transform="rotate(-90 26.7216 13.6943)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="38.0087"
                          r="1.39737"
                          transform="rotate(-90 2.288 38.0087)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="1.39739"
                          r="1.39737"
                          transform="rotate(-90 2.288 1.39739)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="38.0089"
                          r="1.39737"
                          transform="rotate(-90 14.5849 38.0089)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="38.0089"
                          r="1.39737"
                          transform="rotate(-90 26.7216 38.0089)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="1.39761"
                          r="1.39737"
                          transform="rotate(-90 14.5849 1.39761)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="1.39761"
                          r="1.39737"
                          transform="rotate(-90 26.7216 1.39761)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>      
                </div>
    );
};

export default Login;