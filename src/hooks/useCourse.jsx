import { useQuery } from "@tanstack/react-query";
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const useCourse = ()=>{
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: course = []} = useQuery({
        queryKey: ['courses', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://windbag-prime-academy-server-tauft-aolcom.vercel.app/courses?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    return [course, refetch]
} 
export default useCourse;