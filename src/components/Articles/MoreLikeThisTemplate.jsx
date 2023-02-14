import React from 'react'
import { useNavigate } from 'react-router-dom'


const MoreLikeThisTemplate = ({item}) => {
    const navigate=useNavigate()

    const goToTopics=(e)=>{
        navigate(`/articletopics`,{state:e.target.innerText})
      }

    return (
    <div className='flex flex-col-reverse sm:flex-row  sm:h-[140px] max-w-[340px] border-b border-slate-400 pb-3 morelike'>
        <div className="sm:w-7/12">
            <p className='text-[13px] hover:underline cursor-pointer'
            onClick={(e)=>goToTopics(e)}
            >{item.topics[0]}</p>
            <h3 className='hover:underline cursor-pointer'
        onClick={()=>navigate(`/article/${item.id}/${item.template}`)}>
        {item.mainHeader}</h3>
        </div>
        <img src={item.img} alt={item.mainHeader} className="w-full sm:w-5/12  object-cover sm:pl-2"/>
    </div>
  )
}

export default MoreLikeThisTemplate