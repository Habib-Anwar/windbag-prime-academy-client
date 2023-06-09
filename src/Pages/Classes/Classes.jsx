import { useState } from "react";


const Classes = ({ item }) => {
    const { image, name, instructor, available_seats, price, } = item;
    const [disabled, setDisabled] = useState(false);
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

                        <button disabled={disabled}  className="btn btn-warning btn-outline">Enrole Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Classes;