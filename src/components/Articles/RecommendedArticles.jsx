import React from 'react'
import { useNavigate } from 'react-router-dom';
import { articles } from '../../utils/vellMagazineData';

const RecommendedArticles = ({item}) => {
    const {topics,mainHeader,content,img}=item;
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
    <div className='max-w-[375px] m-auto '>
        <img src={img} alt={mainHeader} className="object-cover h-[200px] w-full cursor-pointer hover:opacity-70" 
          onClick={(e)=>goToArticleFromImg(e)}
        />
        <p className='pt-1 text-sm hover:underline cursor-pointer py-1'
        onClick={(e)=>goToTopics(e)}
        >{topics[0]}</p>
        <h3 className='font-serif line-clamp-1 p-0 hover:underline cursor-pointer text-lg'
        
        onClick={()=>navigate(`/article/${item.id}/${item.template}`)}>

            {mainHeader}</h3>
        <p className=' text-sm line-clamp-2 homepageFont'> {content.startsWith('<p')
              ? content
              .slice(17, 180)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
            //   .replace(/<a.*<\/a>/gi,'')
              : content
              .slice(4, 180)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
                  }
            ...</p>
    </div>
  )
}

export default RecommendedArticles