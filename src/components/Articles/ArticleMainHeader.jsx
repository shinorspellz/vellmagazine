import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ArticleMainHeader = ({ item}) => {
    const navigate=useNavigate()
    const [show,setShow]=useState(true)

    useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


  return (
      <div
        className="w-[247px] h-[365px] cursor-pointer relative rounded-lg"
        onMouseOver={() => setShow(false)}
        onMouseOut={() => setShow(true)}
        
      >
        <img src={item.img} alt="image" className="absolute left-0 top-0 h-full object-cover -z-10 rounded-lg" 
        />
        <div className={`${!show ? "block absolute left-0 top-0 w-full h-full text-center text-2xl font-bold  pt-3 px-1 bg-white/60 " : "hidden"} ` }
        onClick={()=>navigate(`/article/${item.id}/${item.template}`)}     >
        <h3 className={`${show && "hidden"} text-[#503C3B]  pt-5 articleMainHeader`}>{item.mainHeader}</h3>
        <h3 className={`${show && "hidden"} absolute bottom-2 left-[50%] translate-x-[-50%] text-[#503C3B] w-full text-3xl  readmore`}> Read More...</h3>
      </div>
      </div>      
  )
}

export default ArticleMainHeader
