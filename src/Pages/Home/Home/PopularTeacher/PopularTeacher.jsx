import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import './PopularTeacher.css'

const PopularTeacher = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(()=>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            const popularCourses = data.filter(course => course.category === 'popular');
            setInstructor(popularCourses)
        })
    }, [])
   
    return (
        <div className="teacher font-bold">
                  <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            instructor.map(item =><SwiperSlide
            key={item.id}>
               <div className="flex justify-center bg-slate-500 bg-opacity-80 mt-24">
               <div>
               <img src={item.person_image} alt="" style={{borderRadius:'200px'}} />
               </div>
               <div className="mt-12 ml-8 text-white">
               <h3 className="text-3xl font-semibold">{item.instructor}</h3>
                <p className="text-lg">Email: {item.email}</p>
                <p className="text-lg font-bold">Number of Classes: {item.classes_taken}</p>
               </div>
               </div>
            </SwiperSlide>)
        }
     
      </Swiper>
        </div>
    );
};

export default PopularTeacher;