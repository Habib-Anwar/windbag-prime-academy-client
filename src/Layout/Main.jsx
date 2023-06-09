import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/NavBar/NavBar";




const Main = () => {
    const location = useLocation();
    console.log(location);
    const noNavbarFooter = location.pathname.includes('404');
    return (
        <div>
            {!noNavbarFooter && <Navbar></Navbar>}
            <Outlet></Outlet>
            { !noNavbarFooter && <Footer></Footer>}
        </div>
    );
};

export default Main;