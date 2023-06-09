import { useEffect, useState } from "react";

const useClass = () =>{
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            
            setCourses(data);
            setLoading(false);
        })
    }, [])
    return [courses, loading]

}
export default useClass;