import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VellMagazineContext } from '../../context/VellMagazineContext';
import { articles } from '../../utils/vellMagazineData';

const SingleTrending = ({item,index}) => {
  const {changeFormat}=useContext(VellMagazineContext)
  const navigate=useNavigate()
    const {content,date,img,mainHeader,topics,template,id}=item;

    const goToTopics=(e)=>{
      navigate(`/articletopics`,{state:e.target.innerText})
    }

   
  return (
    <div className='flex lg:flex-col items-center justify-between mx-3 my-3 lg:my-0'>
        <img src={img} alt="trending" className={`${index%2==0 ? "lg:h-[200px] lg:mb-[50px]" : "lg:h-[250px]"} h-[180px] w-5/12 lg:w-[160px]  object-cover`} />
        <div className='w-7/12 sm:w-full mt-3 ml-3 lg:ml-0 '>
          <p className='text-[12px] font-bold hover:underline cursor-pointer '
          onClick={(e)=>goToTopics(e)}
          >{topics[0]}</p>
           <h4 className='font-bold text-[14px] hover:underline cursor-pointer line-clamp-1 py-1 trending-title'
            onClick={()=>navigate(`/article/${id}/${template}`)} >
            {mainHeader.slice(0,20)} ...</h4>
        <p className='font-500 font-serif text-[14px] xl:py-4 line-clamp-3 hidden lg:block '>{content.startsWith("<p") ? content.slice(17,87).replace(/<.?p[^>]*>/g,"").replace(/<.?h.?[^>]*>/g,"") : content.slice(4,77).replace(/<.?p[^>]*>/g,"").replace(/<.?h.?[^>]*>/g,"")}... </p>
        <p className='font-[500] text-[13px]'>{changeFormat(date)}</p>
        </div>
    </div>
  )
}

export default SingleTrending