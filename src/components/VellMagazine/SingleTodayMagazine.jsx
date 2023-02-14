import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VellMagazineContext } from '../../context/VellMagazineContext';

const SingleTodayMagazine = ({item,index,thisMonthArr}) => {
  const {changeFormat}=useContext(VellMagazineContext)
const navigate=useNavigate()
    // const {img,date,content}=item;
    const relevantTopics=["MENTAL HEALTH","WEEKEND GETAWAYS","STYLE","PET INFLUENCERS","SOCIAL MEDIA HACKS","COST OF LIVING"]

    const goToTopics=(e)=>{
      navigate(`/articletopics`,{state:e.target.innerText})
    }
    const goToArticle=(e)=>{
      let num=e.target.src.indexOf("/images")
      const item=thisMonthArr.find(item=>item.img==e.target.src.slice(num))
      // console.log(item)
      navigate(`/article/${item.id}/${item.template}`)
      // console.log(item.id)
    }

  return (

    <div className='max-w-[440px] flex flex-col '>
        <h1 className='uppercase font-[500] hidden xl:block hover:underline cursor-pointer hover:font-semibold mb-1 text-center'
        onClick={(e)=>goToTopics(e)}
        >{relevantTopics[index]}</h1>
        <img src={item.img} alt="single-magazine"className='h-[131px] sm:h-[225px] mb-2 cursor-pointer object-cover hover:scale-105' 
        onClick={(e)=>goToArticle(e)}
        />
        <p className='font-500 font-serif text-[14px] xl:py-3 line-clamp-1 xl:line-clamp-none'>{item.content.startsWith("<p") ? item.content.slice(17,200).replace(/<.?p[^>]*>/g,"").replace(/<.?h.?[^>]*>/g,"") : item.content.slice(4,200).replace(/<.?p[^>]*>/g,"").replace(/<.?h.?[^>]*>/g,"")}...</p>
        <p className='font-500 text-[14px] hidden xl:block text-left' >{changeFormat(item.date)}</p>
    </div>
  )
}

export default SingleTodayMagazine