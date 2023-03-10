import React from 'react'
import { useNavigate } from 'react-router-dom'
import { articles } from '../../utils/vellMagazineData'


const MoreLikeThisTemplate = ({item}) => {
    const navigate=useNavigate()

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
    <div className='flex flex-col-reverse sm:flex-row  sm:h-[140px] max-w-[340px] border-b border-slate-400 pb-3 morelike'>
        <div className="sm:w-7/12">
            <p className='text-[13px] hover:underline cursor-pointer'
            onClick={(e)=>goToTopics(e)}
            >{item.topics[0]}</p>
            <h3 className='hover:underline cursor-pointer line-clamp-2 py-0'
        onClick={()=>navigate(`/article/${item.id}/${item.template}`)}>
        {item.mainHeader}</h3>
        <p className='font-500  text-[13px] line-clamp-3 hidden lg:block '>{item.content.startsWith("<p") ? item.content.slice(17,87).replace(/<.?p[^>]*>/g,"").replace(/<.?h.?[^>]*>/g,"") : item.content.slice(4,75).replace(/<.?p[^>]*>/g,"").replace(/<.?h.?[^>]*>/g,"")}... </p>
        </div>
        <img src={item.img} alt={item.mainHeader} className="w-full sm:w-5/12  object-cover sm:pl-2 cursor-pointer"
        onClick={(e)=>goToArticleFromImg(e)}
        />
    </div>
  )
}

export default MoreLikeThisTemplate