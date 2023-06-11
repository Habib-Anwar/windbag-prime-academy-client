import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () =>{
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

      const { data: isAdmin, isLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    return [isAdmin, isLoading]
}
export default useAdmin;