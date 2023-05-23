import React, { useState } from 'react';
import { GrOverview } from "react-icons/gr"
import { IoIosAnalytics } from "react-icons/io"
import { MdDashboard,MdOutlineSchool } from "react-icons/md"
import { RiSettingsLine } from "react-icons/ri"
import { FaBars } from "react-icons/fa"
    
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/pages/Dashboard/overview",
            name:"Overview",
            icon:<GrOverview/>
            
        },
        {
            path:"/pages/Dashboard/analytics",
            name:"Analytics",
            icon:<IoIosAnalytics/>
        },
        {
            path:"/pages/Dashboard/dashboard",
            name:"Dashboard",
            icon:<MdDashboard/>
        },
        {
            path:"/pages/Dashboard/students",
            name:"Students",
            icon:<MdOutlineSchool/>
        },
        {
            path:"/pages/Dashboard/settings",
            name:"Settings",
            icon:<RiSettingsLine/>
        },
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">User</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;