
import Courses from "../Courses/Courses";
import useClass from "../../../hooks/useClass";

const PopularClasses = () => {
 const [courses] = useClass();
 const popular = courses.filter(course =>course.category === 'popular');
    return (
        <>
        <div className="lg:grid grid-cols-3 gap-4">
            {
                popular.map(course => <Courses
                key={course.id}
                course={course}></Courses>)
            }
        </div>
        </>
    );
};

export default PopularClasses;