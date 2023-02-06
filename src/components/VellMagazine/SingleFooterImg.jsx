import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingleFooterImg = ({item}) => {
    const navigate=useNavigate()
    const {img,topic}=item;

    // console.log(topic.uppercase());
    const goToArticles=()=>{
      if(topic=="Authors"){
        navigate("/authors")
      }else{
        navigate(`/articletopics`,{state:topic.toUpperCase()})
      }
    }

  return (
    <div className='relative cursor-pointer hover:opacity-80'
    onClick={goToArticles}
    >
        <img src={img} alt="footer-img"  className='w-full md:h-[250px] object-cover'/>
        <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white italic w-full text-center footer-text'>{topic}</h1>
    </div>
  )
}

export default SingleFooterImg