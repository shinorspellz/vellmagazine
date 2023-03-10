import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VellNavbar from '../VellMagazine/VellNavbar';
import { authorsData } from '../../utils/vellMagazineData';
import SingleAuthor from './SingleAuthor';
import Footer from '../Footer';
import { createGlobalStyle } from 'styled-components';
import Seo from '../SEO'

const Authors = () => {
    const navigate=useNavigate()
    const [show,setShow]=useState(true)

    useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   console.log(authorsData)

  return (

    <>
    <Seo
      title = "Authors"
      description = "Meet our team of talented writers."
      type= "website"
      image=''
    />
       
    
    <VellNavbar/>
    <h1 className='text-center text-[25px]  font-serif mt-[70px] lg:mt-[150px] authorTemplate '>Authors</h1>
    <div className=' lg:mt-[10px] grid gap-x-5 sm:gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-9 m-auto py-5 justify-center max-w-[1400px]' >
    
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
    <Footer />
    </>
   
  )
}

export default Authors