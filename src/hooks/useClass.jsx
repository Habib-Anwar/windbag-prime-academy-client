import { useEffect, useState } from "react";

const useClass = () =>{
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://windbag-prime-academy-server-tauft-aolcom.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            
            setCourses(data);
            setLoading(false);
        })
    }, [])
    return [courses, loading]

}
export default useClass;