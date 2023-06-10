import { useQuery } from "@tanstack/react-query";
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const useCourse = ()=>{
    const { user } = useContext(AuthContext);

    const { refetch, data: course = []} = useQuery({
        queryKey: ['courses', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/courses?email=${user?.email}`)
            return res.json();
        },
    })
    return [course, refetch]
} 
export default useCourse;