import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io';


const PrivacyMobileNavbar = ({isShow,changeColor,isOpen,setIsShow}) => {
  return (
    <div className={`${isOpen ? "absolute top-[85px] right-[20px] border border-slate-400 p-2 z-30" :"absolute top-[-300px] right-[20px] overflow-hidden z-20"} mobilenavbar transition-all duration-400 ease-in text-xl text-[#503C3B]  gap-2 items-center flex flex-col lg:hidden  w-[160px]  rounded-xl mobile-navbar`} >
  {/* <NavLink to="/marketplace"
   className={({ isActive }) =>
   isActive 
     ? "font-bold "
     : "font-normal "
 }
  >Marketplace</NavLink>
          <NavLink to="/vellmagazine"
   className={({ isActive }) =>
   isActive 
     ? "font-bold "
     : "font-normal "
 }
  >Vell Magazine</NavLink>
  <NavLink to="/signup">
  <button className="border-[2px] border-[#503C3B] rounded-xl  py-[8px] px-[20px] text-[15px] font-[700]">
      Sign Up
  </button>
  </NavLink> */}
</div>  )
}

export default PrivacyMobileNavbar