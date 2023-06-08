
const InstructorAll = ({ item }) => {
    const { person_image, instructor, email, classes_taken, name } = item

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={person_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor}</h2>
                    <p>Email: {email}</p>
                    <p>Number of Classes: {classes_taken}</p>
                    <p className="font-semibold">Name of the Course: {name}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">See Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorAll;