import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Classes = ({ item }) => {
    const { image, name, instructor, available_seats, price, id } = item;
    // const [disabled, setDisabled] = useState(false);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleEnrole = item =>{
        console.log(item);
        if(user && user.email){
            const courseItem = {courseId:id, name, image, instructor, price, email: user.email}
            fetch('http://localhost:5000/courses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(courseItem)
            })
            .then(res =>res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: 'Course added successfully',
                        showConfirmButton:false,
                        timer: 2000
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to enrole the course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if(result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    // if(available_seats === 0){
    //     setDisabled(true)
    // }
    return (
        <div>
            <div className="card">
                <div className="modal-box">
                    <img src={image} alt="" />
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-2 font-semibold">{instructor}</p>
                    <p className="py-2">Available Seats: {available_seats}</p>
                    <p className="py-2">Price: ${price}</p>
                    <div className="modal-action">

                        <button onClick={() =>handleEnrole(item)} className="btn btn-warning btn-outline">Enrole Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Classes;