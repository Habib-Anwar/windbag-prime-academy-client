import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import PopularTeacher from "./PopularTeacher/PopularTeacher";






const Home = () => {
    return (
        <div>
         <Banner></Banner>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <PopularTeacher></PopularTeacher>
        </div>
    );
};

export default Home;