import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VellMagazineContext } from '../../context/VellMagazineContext';
import { articles } from '../../utils/vellMagazineData';

const FashionSingleSlider = ({item,index}) => {
  const {changeFormat}=useContext(VellMagazineContext)
  const navigate=useNavigate()
    const {content,date,img,mainHeader,topics,template,id}=item;

    const goToTopics=(e)=>{
      navigate(`/articletopics`,{state:e.target.innerText})
    }

    const goToArticleFromImg=(e)=>{
      let num = e.target.src.indexOf("/images");
      const item = articles.find(
        (item) => item.img == e.target.src.slice(num)
      );
      // console.log(item)
      navigate(`/article/${item.id}/${item.template}`);
      // console.log(item.id)
      
    }
    
   
  return (
    <div className='flex lg:flex-col items-center justify-between my-3 lg:my-0 gap-3'>
        <img src={img} alt="trending" className={`lg:h-[350px] h-[180px] w-[220px] lg:w-[260px]  object-cover cursor-pointer`}
        onClick={(e)=>goToArticleFromImg(e)}
        />
        <div className='w-7/12 sm:w-full ml-2 '>
          <p className='text-[15px] font-bold hover:underline cursor-pointer '
          onClick={(e)=>goToTopics(e)}
          >{topics[0]}</p>
           <h4 className='font-bold font-serif text-[17px] hover:underline cursor-pointer line-clamp-1 py-1 trending-title'
            onClick={()=>navigate(`/article/${id}/${template}`)} >
            {mainHeader.length > 29 ? mainHeader.slice(0, 29) + "..." : mainHeader}</h4>
        <p className='font-500  text-[13px] xl:py-3 line-clamp-3 hidden lg:block homepageFont '>{content.startsWith("<p") ? content.slice(17,87).replace(/<.?p[^>]*>/g,"").replace(/<.?h.?[^>]*>/g,"") : content.slice(4,75).replace(/<.?p[^>]*>/g,"").replace(/<.?h.?[^>]*>/g,"")}... </p>
        <p className='font-[500] text-[13px] '>{changeFormat(date)}</p>
        </div>
    </div>
  )
}

export default FashionSingleSlider