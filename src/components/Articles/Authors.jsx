import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VellNavbar from '../VellMagazine/VellNavbar';
import { authorsData } from '../../utils/vellMagazineData';
import SingleAuthor from './SingleAuthor';
import { createGlobalStyle } from 'styled-components';

const Authors = () => {
    const navigate=useNavigate()
    const [show,setShow]=useState(true)

    useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   console.log(authorsData)

  return (

    <>
    <VellNavbar/>
    <h1 className='text-center text-[25px] font-bold font-serif mt-[150px] authorTemplate '>Authors</h1>
<div className='mt-[20px] grid gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-9 m-auto py-5 justify-center max-w-[1400px]'>
    
        {
            authorsData.map((item,index)=>{
                return(
                    <div key={index} className="flex justify-center">
                          <SingleAuthor item={item}  />
                    </div>
                )
            })
        }
   
    </div>
    </>
   
  )
}

export default Authors