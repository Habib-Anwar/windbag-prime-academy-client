import { Link, Outlet } from "react-router-dom";
import {  FaBook, FaHome, FaLandmark, FaWallet } from 'react-icons/fa';


const Dashboard = () => {
    return (
        
<>
<div className="text-center">
   <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   Show navigation
   </button>
</div>
<Outlet></Outlet>
<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <li><Link to='/'><FaHome></FaHome>Home</Link></li>
      <li><Link><FaLandmark></FaLandmark>My Selected Classes</Link></li>
      <li><Link><FaBook></FaBook> My Enrolled Classes</Link></li>
      <li><Link><FaWallet></FaWallet> Payment History</Link></li>
      
    </ul>
  </div>
</div>


</>
    );
};

export default Dashboard;