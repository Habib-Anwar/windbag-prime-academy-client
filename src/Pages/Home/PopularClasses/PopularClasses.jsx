import { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import PopularInstructors from "../Home/PopularInstructors/PopularInstructors";


const PopularClasses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            const popularCourses = data.filter(course => course.category === 'popular');
            setCourses(popularCourses)
        })
    }, [])
    return (
        <>
        <div className="lg:grid grid-cols-3 gap-4">
            {
                courses.map(course => <Courses
                key={course.id}
                course={course}></Courses>)
            }
        </div>
        <div>
            {
                courses.map(item =><PopularInstructors
                key={item.id}
                item={item}>

                </PopularInstructors>)
            }
        </div>
        </>
    );
};

export default PopularClasses;