import useClass from "../../hooks/useClass";
import InstructorAll from "./InstructorAll";


const Instructors = () => {

    const [courses] = useClass();

    return (
        <div className="grid grid-cols-3 gap-4 mt-12">
            {
                courses.map(item=><InstructorAll
                key={item.id}
                item={item}></InstructorAll>)
            }
        </div>
    );
};

export default Instructors;
