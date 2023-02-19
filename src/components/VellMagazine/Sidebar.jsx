import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { VellMagazineContext } from '../../context/VellMagazineContext'

const Sidebar = ({setIsShow,isShow}) => {
  const {theme}=useContext(VellMagazineContext)

const navigate=useNavigate()

  const handleChange = (e) => {
    navigate('/allarticles', { state: e.target.value })
    setIsShow(false)

  }
  const handleSidebarMenu =(e)=>{
    navigate('/articletopics', { state: e.target.innerText })
    setIsShow(false)
  }
  return (
    <div className={`${isShow ? "block  w-full sidebar absolute top-[45px] right-0 lg:hidden  pb-12  " : "hidden w-full sidebar absolute top-[45px] right-0 pb-12 "} lg:hidden `}>
    <section className='justify-between items-end p-3 xl:hidden flex flex-col'>
      <div className='flex justify-center items-center gap-2'>
         <NavLink to="https://vmodel.app/" target="_blank" 
    className='font-bold text-[17px] whitespace-nowrap flex items-center pb-2'>
      {theme === "light-theme" ? (
            <img
              src="/images/Logo.jpg"
              alt="logo"
              className='w-[100px] pr-1 '
            />
          ) : (
            <img
            src="/images/logoForDarkMode.png"
            alt="logo"
              className='w-[100px] pr-1 '
            />
          )}
      </NavLink>
    <NavLink to="/" 
    className='font-bold text-[17px] whitespace-nowrap flex items-center pb-2'>
      <span className='p-0'>Home</span>
      </NavLink>
      </div>
   
    <select
      name="dates"
      id="dates"
      className="border border-slate-500 text-sm bg-transparent font-[900] focus-within:ring-0 cursor-pointer w-[200px] rounded-xl"
      onChange={(e) => handleChange(e)}
      defaultValue={'DEFAULT'}
    >
      <option value="DEFAULT" disabled hidden className="py-2 font-bold cursor-pointer">
        EDITION
      </option>
      <option value="DEC 2022 EDITION" className="py-2 font-bold cursor-pointer text-[13px] px-1">
        DECEMBER EDITION
      </option>
      <option value="JAN 2023 EDITION" className="py-2 font-bold cursor-pointer text-[13px] px-1">
        JANUARY EDITION
      </option>
      <option value="FEB 2023 EDITION" className="py-2 font-bold cursor-pointer text-[13px] px-1">
        FEBRUARY EDITION
      </option>
    </select>
    <button className='sidebar-main-btns font-semibold'
    onClick={(e)=>handleSidebarMenu(e)}
    >WELLBEING</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >MENTAL HEALTH</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >PHYSICAL HEALTH</button>
    <button className='sidebar-main-btns font-semibold'
    onClick={(e)=>handleSidebarMenu(e)}
    >LIFE MATTERS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >COST OF LIVING</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >POLITICS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >TECHNOLOGY</button>
    <button className='sidebar-main-btns font-semibold'
    onClick={(e)=>handleSidebarMenu(e)}
    >FASHION & BEAUTY</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >HAIR</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >SKIN</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >MAKEUP</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >TRENDS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >CELEBRITY FASHION</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >FASHION WEEKS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >CLOTHING</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >STYLE</button>
    <button className='sidebar-main-btns font-semibold'
    onClick={(e)=>handleSidebarMenu(e)}
    >PETS/ANIMALS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >PETS/ANIMALS IN THE SPOTLIGHT</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >PET INFLUENCERS</button>
    <button className='sidebar-sub-btns
    onClick={(e)=>handleSidebarMenu(e)}
    '>ADVICE</button>
    <button className='sidebar-sub-btns
    onClick={(e)=>handleSidebarMenu(e)}
    '>PRODUCT REVIEWS</button>
    <button  className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >REHOMING/CHARITY</button>
    <button className='sidebar-main-btns font-semibold'
    onClick={(e)=>handleSidebarMenu(e)}
    >ARTS & CULTURE</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >MUSIC</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >BOOKS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >ART</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >CINEMA</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >ARCHITECTURE</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >PHOTOGRAPHY</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >FESTIVALS/CELEBRATIONS</button>
    <button className='sidebar-main-btns font-semibold'
    onClick={(e)=>handleSidebarMenu(e)}
    >TRAVEL</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >HOLIDAY DESTINATIONS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >WEEKEND GETAWAYS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >HOLIDAY BUCKET LISTS</button>
    <button className='sidebar-main-btns font-semibold'
    onClick={(e)=>handleSidebarMenu(e)}
    >SOCIAL MEDIA</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >INFLUENCERS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >SOCIAL MEDIA TRENDS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >SOCIAL MEDIA HACKS</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >PROBLEMS WITH SOCIAL MEDIA</button>
    
    
    <NavLink to="/today"
     className={({ isActive }) =>
     isActive 
       ? "font-bold text-[17px]"
       : "font-normal text-[17px]"
   }></NavLink>
    <NavLink to="/subscribe"
     className={({ isActive }) =>
     isActive 
       ? " text-[17px] py-2 font-semibold"
       : " text-[17px] py-2 font-semibold"
   }
    >SUBSCRIBE</NavLink>
    </section>
</div>
  )
}

export default Sidebar