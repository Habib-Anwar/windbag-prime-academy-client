import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: users = [], refetch} = useQuery(['users'], async () =>{
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }
    return (
        <div>
            <h3 className="text-3xl font-semibold">Total User: {users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-lg font-semibold">
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =>  <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{
            user.role === 'admin' || user.role === 'instructor' ? user.role : <FaUserShield></FaUserShield>}</td>
            <td>
                <button onClick={()=>{handleMakeInstructor(user)}} className="btn btn-neutral btn-sm">Make Instructor</button>
                <button onClick={() =>{handleMakeAdmin(user)}} className="btn btn-error btn-sm">Make Admin</button>
            </td>
          </tr>)
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;