import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddclassName = () => {
    const {user} = useContext(AuthContext);

    const handleAddCourse = event => {
        event.preventDefault();

        const form = event.target;
        const course = form.name.value;
        const picture = form.photo.value;
        const seat = form.seat.value;
        const email = user?.email;
        const price = form.price.value;
        const instructor = user?.displayName;
        const addCourse = {
           course,
            picture,
            seat,
            email,
            price,
            instructor
           
        }
        console.log(addCourse);
        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCourse)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            form.reset();

    }

    return (
        <div>
            
<form className="w-full" onSubmit={handleAddCourse}>
    
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Name</label>
        <input type="text" name=""  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
    </div> 
    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Image</label>
        <input type="text" name="photo"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Name</label>
        <input type="text" defaultValue={user?.displayName}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Email</label>
        <input type="text" defaultValue={user?.email}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Seats</label>
        <input type="text" name="seat"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
        <input type="text" name="price"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
    </div> 
 
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
</form>

        </div>
    );
};

export default AddclassName;