import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { VellMagazineContext } from '../../context/VellMagazineContext'
import { articles, headerSliderData } from '../../utils/vellMagazineData'
import moment from 'moment'

const VelllTopStories = () => {
  const {changeFormat}=useContext(VellMagazineContext)
    const navigate=useNavigate()
    const today=new Date()
    const month=moment(today).format("LL").split(" ")[0]
  const topArticles = headerSliderData?.filter(item=>item.theme.includes("topstories"))
  
  // console.log(changeFormat(topArticles[1].date))

  const goToTopics=(e)=>{
    navigate(`/articletopics`,{state:e.target.innerText})
  }

  const goToArticle=(e)=>{
    // if(e.target.h)
    const item=topArticles.find(item=>item.mainHeader==e.target.innerText)
    navigate(`/article/${item.id}/${item.template}`)  
    console.log(item.id)
  }
  const goToArticleFromImg=(e)=>{
    let num = e.target.src.indexOf("/images");
    const item = topArticles.find(
      (item) => item.img == e.target.src.slice(num)
    );
    // console.log(item)
    navigate(`/article/${item.id}/${item.template}`);
    // console.log(item.id)
  }

  return (
    <main className="vellmagazine-topStories mt-[40px]  xl:px-[2rem]">
      <h1 className="text-center font-500 font-serif text-4xl py-5 mb-[0.2rem]">
        TOP STORIES
      </h1>
      <section className="flex  flex-col lg:flex-row ">
        <div className="w-full xl:w-6/12 md:p-5 flex flex-col  gap-3">
          <figure className='shine'>
          <img
            src={topArticles[0].img}
            alt="topstories"
            className="object-cover cursor-pointer topStoriesImg w-full h-[300px] md:h-[420px]"
            onClick={(e)=>goToArticleFromImg(e)}
            />
          </figure>
          <p className="text-sm hover:underline cursor-pointer "
          onClick={(e)=>goToTopics(e)}
          >{topArticles[0].topics[0]}</p>
          {/* <p className="uppercase font-bold pt-2 pb-1 hidden md:block">{topArticles[0].mainHeader}</p> */}
          <h3 className="font-400 font-serif text-[20px] md:text-[28px] text-center md:text-start hover:underline cursor-pointer"
          onClick={(e)=>goToArticle(e)}>
            {topArticles[0].mainHeader}
          </h3>
          <p className="text-[18px] hidden md:block homepageFont">
              {topArticles[0].content.startsWith('<p')
              ? topArticles[0].content
              .slice(17, 370)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
              
              : topArticles[0].content
              .slice(4, 370)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
           
                  }
            ...
          </p>
        </div>
        <div className="w-full xl:w-6/12 p-5 flex flex-col justify-between gap-3">
          <div className="flex justify-between md:justify-start md:gap-3 xl:gap-8">
          <figure className='shine w-5/12 sm:w-[290px] h-[180px] sm:h-[195px]'>
            <img
              src={topArticles[1].img}
              alt="topstories-1"
              className=" object-cover w-full h-full cursor-pointer topStoriesImg "
              onClick={(e)=>goToArticleFromImg(e)}
              />
            </figure>
            <div className="pl-3 md:pl-0 w-7/12 sm:w-6/12 flex flex-col justify-center sm:justify-start max-w-[280.5px]">
              <p className="uppercase text-[13px] hover:underline cursor-pointer "
                            onClick={(e)=>goToTopics(e)}
                            >
                {topArticles[1].topics[0]}
              </p>
              <h3 className="font-500 font-serif text-[20px] md:text-[17px] py-1  line-clamp-1 md:line-clamp-2 hover:underline cursor-pointer"
              onClick={(e)=>goToArticle(e)}
              >
                {topArticles[1].mainHeader}
              </h3>
              <p className=' text-[18px] line-clamp-3 topStoriesP homepageFont'>{topArticles[1].content.startsWith('<p')
              ? topArticles[1].content
              .slice(17, 180)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
              : topArticles[1].content
              .slice(4, 180)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
                  }
            ...</p>
              <p className="pt-2 text-[13px] ">{changeFormat(topArticles[1].date)}</p>
            </div>
          </div>
          <div className="flex justify-between md:justify-start md:gap-3 xl:gap-8 ">
          <figure className='shine w-5/12 sm:w-[290px] h-[180px] sm:h-[195px]'>
            <img
              src={topArticles[2].img}
              alt="topstories-1"
              className=" object-cover w-full h-full cursor-pointer topStoriesImg "
              onClick={(e)=>goToArticleFromImg(e)}
              />
            </figure>
           
            <div className="pl-3 md:pl-0 w-7/12 sm:w-6/12 flex flex-col justify-center sm:justify-start max-w-[280.5px]">
              <p className="uppercase text-[13px] hover:underline cursor-pointer"
                            onClick={(e)=>goToTopics(e)}
                            >
                {topArticles[2].topics[0]}
              </p>
              <h3 className="font-500 font-serif text-[20px] md:text-[17px] py-1  line-clamp-1 md:line-clamp-2 hover:underline cursor-pointer"
              onClick={(e)=>goToArticle(e)}
              >
                {topArticles[2].mainHeader}
              </h3>
              <p className=' text-[18px] line-clamp-3 topStoriesP homepageFont'>{topArticles[1].content.startsWith('<p')
              ? topArticles[2].content
              .slice(17, 180)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
              : topArticles[1].content
              .slice(4, 180)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
                  }
            ...</p>
              <p className="pt-2 text-[13px]">{changeFormat(topArticles[3].date)}</p>
            </div>
          </div>
          <div className="flex justify-between md:justify-start md:gap-3 xl:gap-8">
          <figure className='shine w-5/12 sm:w-[290px] h-[180px] sm:h-[195px]'>
            <img
              src={topArticles[3].img}
              alt="topstories-1"
              className="w-full h-full object-cover  cursor-pointer topStoriesImg "
              onClick={(e)=>goToArticleFromImg(e)}
              />

              </figure>
            <div className="pl-3 md:pl-0 w-7/12  sm:w-6/12 flex flex-col justify-center sm:justify-start max-w-[280.5px]">
              <p className="uppercase text-[13px]  hover:underline cursor-pointer  "
                            onClick={(e)=>goToTopics(e)}
                            >
                {topArticles[3].topics[0]}
              </p>
              <h3 className="font-500 font-serif text-[20px] md:text-[17px] py-1 line-clamp-1 md:line-clamp-2 hover:underline cursor-pointer"
              onClick={(e)=>goToArticle(e)}
              >
                {topArticles[3].mainHeader}
              </h3>
              <p className=' text-[18px] line-clamp-3 topStoriesP homepageFont'>{topArticles[1].content.startsWith('<p')
              ? topArticles[3].content
              .slice(17, 180)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
              .replace(/<.?[(</p>)]/g, '')
              : topArticles[1].content
              .slice(4, 180)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
              .replace(/<.?[(</p>)]/g, '')
                  }
            ...</p>
              <p className="pt-2 text-[13px] ">{changeFormat(topArticles[3].date)}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default VelllTopStories
