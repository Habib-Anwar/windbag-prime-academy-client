import { Link, Outlet } from "react-router-dom";
import {  FaBook, FaComment, FaHome, FaLandmark, FaPeopleArrows, FaPlusCircle, FaUsers, FaWallet } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

const [isAdmin, isLoading] = useAdmin();
const [isInstructor] = useInstructor()

if(isLoading){
  return <div>Loading...</div>;
}
  //   const isInstructor = true;
  //   // const isUser = true;
  // const isAdmin = true;
    return (
        
<>
<div className="text-center">
  
</div>

<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open Menu</label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

    {
  isAdmin ? (
    <>
      <li>
        <Link to="/">
          <FaHome></FaHome>Home
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaPeopleArrows></FaPeopleArrows> Manage Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/allusers">
          <FaBook></FaBook> Manage Users
        </Link>
      </li>
      <li>
        <Link>
          <FaWallet></FaWallet> Payment History
        </Link>
      </li>
    </>
  ) : isInstructor ? (
    <>
      <li>
        <Link to="/">
          <FaHome></FaHome>Home
        </Link>
      </li>
      <li>
        <Link to="/dashboard/addclass">
          <FaPlusCircle></FaPlusCircle> Add a Class
        </Link>
      </li>
      <li>
        <Link to="/dashboard/myclasses">
          <FaLandmark></FaLandmark> My Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/enrolledstudents">
          <FaUsers></FaUsers> Total Enrolled Students
        </Link>
      </li>
      <li>
        <Link to="/dashboard/feedback">
          <FaComment></FaComment> Feedback
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/">
          <FaHome></FaHome>Home
        </Link>
      </li>
      <li>
        <Link to="/dashboard/studentdashboard">
          <FaLandmark></FaLandmark>My Selected Classes
        </Link>
      </li>
      <li>
        <Link>
          <FaBook></FaBook> My Enrolled Classes
        </Link>
      </li>
      <li>
        <Link>
          <FaWallet></FaWallet> Payment History
        </Link>
      </li>
    </>
  )
}

    
      
    </ul>
  </div>
</div>


</>
    );
};

export default Dashboard;