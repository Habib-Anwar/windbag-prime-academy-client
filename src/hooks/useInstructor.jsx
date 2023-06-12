import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor = () =>{
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

      const { data: isInstructor, isLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://windbag-prime-academy-server-tauft-aolcom.vercel.app/users/instructor/${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    return [isInstructor, isLoading]
}
export default useInstructor;