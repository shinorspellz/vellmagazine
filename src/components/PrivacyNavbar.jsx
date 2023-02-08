import { Link, NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import { useContext, useState } from "react";
import PrivacyMobileNavbar from "./PrivacyMobilNavbar";
import { useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { VellMagazineContext } from "../context/VellMagazineContext";



const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [isShow,setIsShow]=useState(false)
  const {theme,changeTheme}=useContext(VellMagazineContext)


  const changeColor = (a) => {
    let items = document.querySelectorAll(".single-link.active-link");
    if (items.length) {
      items[0].className = "single-link";
    }
    a.target.className = "single-link active-link";
  };

  
  
useEffect(() => {
  //in order to give class to root element and store it in the local storage
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}, [theme]);
  
  return (
    <nav className="fixed top-0 z-50  w-full flex flex-col lg:flex-row justify-between items-center py-4 px-3 md:px-12 lg:border-b border-slate-400  " id="navbar">
      <div className="flex justify-between items-center w-full lg:w-3/12 ">
        <Link to="https://vmodel.app/">
          {
            theme=="light-theme" ? (
              <img src="images/Logo.jpg" alt="logo" className="w-[150px]  lg:w-[195px] lg:h-[44px]" />
            ):(
              <img src="images/logoForDarkMode.png" alt="logo" className="w-[150px]  lg:w-[195px] lg:h-[44px]" />

            )
          }
          </Link>
        <div className="flex justify-between items-center gap-2">
           <button className="navbar-switch flex items-center justify-center text-xl lg:hidden"
            onClick={changeTheme}
            >
         {
                theme==="light-theme" ?(
                  <BiMoon/>
                ):(<BiSun className='text-yellow-400'/>)
              }
        </button> 
        
      <FaBars className="text-3xl fabars lg:hidden"
       onClick={()=>setIsOpen(!isOpen)}
       />
        </div>
      </div>
      
      <div className="text-sm linksDiv  gap-8 items-center hidden lg:flex  text-[16px]">
      

        <NavLink to="/marketplace"
         className={({ isActive }) =>
         isActive 
          ? "font-bold "
          : "font-normal "
       }
        >Marketplace</NavLink>
                    <NavLink to="/"
         className={({ isActive }) =>
         isActive 
           ? "font-bold "
           : "font-normal "
       }
        >Vell Magazine</NavLink>
        

        <NavLink to="/signup">
        <button className="border-[1px] signBtn rounded-xl  py-[8px] px-[15px] text-[14px] font-sans">
            Sign Up
        </button>
        </NavLink>
        <button className="navbar-switch items-center justify-center text-2xl hidden lg:flex"
            onClick={changeTheme}
            >
         {
                theme=="light-theme" ?(
                  <BiMoon/>
                ):(<BiSun className='text-yellow-400'/>)
              }
        </button> 
      </div>
        <PrivacyMobileNavbar changeColor={changeColor} isShow={isShow} isOpen={isOpen} setIsShow={setIsShow}/>
    </nav>
  );
};

export default Navbar;
