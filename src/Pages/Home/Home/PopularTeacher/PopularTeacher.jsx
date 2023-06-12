import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './PopularTeacher.css'
import useClass from "../../../../hooks/useClass";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const PopularTeacher = () => {
   const [courses] = useClass();
   const popular = courses.filter(course =>course.category === 'popular');


    return (
      <>
      <SectionTitle
      subHeading="meet our top instructors"
      heading="popular instructors"></SectionTitle>
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
            popular.map(item =><SwiperSlide
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
        </>
    );
};

export default PopularTeacher;