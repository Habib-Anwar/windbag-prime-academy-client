import { useEffect, useState } from "react";
import Courses from "../Courses/Courses";


const PopularClasses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const popularCourses = data.filter(course => course.category === 'popular');
            setCourses(popularCourses)
        })
    }, [])
    return (
        <div>
            {
                courses.map(course => <Courses
                key={course.id}
                course={course}></Courses>)
            }
        </div>
    );
};

export default PopularClasses;