import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = ({setIsShow,theme}) => {
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
    // <div className="w-full h-[100vh] sidebar absolute top-[65px] left-0 <br/> ">
    //     <section className='justify-between items-end p-3 xl:hidden flex flex-col gap-5'>
    //     <NavLink to="/" 
    //     className='font-bold text-[18px] whitespace-nowrap'>VModel Home</NavLink>
    //     <select
    //       name="dates"
    //       id="dates"
    //       className="border border-slate-500 text-sm bg-transparent font-[900] focus-within:ring-0 cursor-pointer w-[120px]"
    //       onChange={(e) => handleChange(e)}
    //       defaultValue={'DEFAULT'}
    //     >
    //       <option value="DEFAULT" disabled hidden className="py-2 font-bold cursor-pointer">
    //         EDITION
    //       </option>
    //       <option value="DEC 2022" className="py-2 font-bold cursor-pointer text-[13px] px-2">
    //         DECEMBER EDITION
    //       </option>
    //       <option value="JAN 2023" className="py-2 font-bold cursor-pointer text-[13px] px-2 ">
    //         JANUARY EDITION
    //       </option>
    //     </select>
    //     <NavLink to="/articletopics"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >WELLBEING</NavLink>
    //     <NavLink to="/articletopics"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >MENTAL HEALTH</NavLink>
    //     <NavLink to="/articletopics"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >PHYSICAL HEALTH</NavLink>
    //     <NavLink to="/articletopics"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >LIFE MATTERS</NavLink>
    //     <NavLink to="/today"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >FASHION & BEAUTY</NavLink>
    //     <NavLink to="/beauty"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >PETS/ANIMALS</NavLink>
    //     <NavLink to="/photography"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >ART & CULTURE</NavLink>
    //     <NavLink to="/art"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >TRAVEL</NavLink>
    //     <NavLink to="/culture"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >SOCIAL MEDIA</NavLink>
    //     {/* <NavLink to="/music"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >MUSIC</NavLink>
    //     <NavLink to="/film"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >FILM</NavLink> */}
    //     <NavLink to="/subscribe"
    //      className={({ isActive }) =>
    //      isActive 
    //        ? "font-bold text-[17px]"
    //        : "font-normal text-[17px]"
    //    }
    //     >SUBSCRIBE</NavLink>
    //     </section>
    // </div>
    <div className="w-full h-[100vh] sidebar absolute top-[45px] left-0 lg:hidden ">
    <section className='justify-between items-end p-3 xl:hidden flex flex-col'>
    <NavLink to="/" 
    className='font-bold text-[17px] whitespace-nowrap flex items-center pb-2'>
      <img src={theme=="light-theme" ? "/images/Logo.jpg" : "/images/logoForDarkMode.jpg"} alt="logo" className='w-[100px] pr-1 '/><span className='p-0'>Home</span>
      </NavLink>
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
    </select>
    <button className='sidebar-main-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >WELLBEING</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >MENTAL HEALTH</button>
    <button className='sidebar-sub-btns'
    onClick={(e)=>handleSidebarMenu(e)}
    >PHYSICAL HEALTH</button>
    <button className='sidebar-main-btns'
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
    <button className='sidebar-main-btns'
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
    <button className='sidebar-main-btns'
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
    <button className='sidebar-main-btns'
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
    <button className='sidebar-main-btns'
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
    <button className='sidebar-main-btns'
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
   }
    >FASHION & BEAUTY</NavLink>
    <NavLink to="/beauty"
     className={({ isActive }) =>
     isActive 
       ? "font-bold text-[17px]"
       : "font-normal text-[17px]"
   }
    >PETS/ANIMALS</NavLink>
    <NavLink to="/photography"
     className={({ isActive }) =>
     isActive 
       ? "font-bold text-[17px]"
       : "font-normal text-[17px]"
   }
    >ART & CULTURE</NavLink>
    <NavLink to="/art"
     className={({ isActive }) =>
     isActive 
       ? "font-bold text-[17px]"
       : "font-normal text-[17px]"
   }
    >TRAVEL</NavLink>
    <NavLink to="/culture"
     className={({ isActive }) =>
     isActive 
       ? "font-bold text-[17px]"
       : "font-normal text-[17px]"
   }
    >SOCIAL MEDIA</NavLink>
    {/* <NavLink to="/music"
     className={({ isActive }) =>
     isActive 
       ? "font-bold text-[17px]"
       : "font-normal text-[17px]"
   }
    >MUSIC</NavLink>
    <NavLink to="/film"
     className={({ isActive }) =>
     isActive 
       ? "font-bold text-[17px]"
       : "font-normal text-[17px]"
   }
    >FILM</NavLink> */}
    <NavLink to="/subscribe"
     className={({ isActive }) =>
     isActive 
       ? "font-bold text-[17px]"
       : "font-normal text-[17px]"
   }
    >SUBSCRIBE</NavLink>
    </section>
</div>
  )
}

export default Sidebar