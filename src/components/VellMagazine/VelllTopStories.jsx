import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { VellMagazineContext } from '../../context/VellMagazineContext'
import { articles } from '../../utils/vellMagazineData'

const VelllTopStories = () => {
  const {changeFormat}=useContext(VellMagazineContext)
    const navigate=useNavigate()
  const TopArticles = articles.filter((item) => item.theme == 'top stories')
  
  // console.log(changeFormat(TopArticles[1].date))

  const goToTopics=(e)=>{
    navigate(`/articletopics`,{state:e.target.innerText})
  }

  const goToArticle=(e)=>{
    const item=TopArticles.find(item=>item.mainHeader==e.target.innerText)
    navigate(`/article/${item.id}/${item.template}`)  
    // console.log(item.id)
  }

  return (
    <main className="vellmagazine-topStories mt-[40px]  xl:px-[2rem]">
      <h1 className="text-center font-500 font-serif text-4xl py-5 mb-[0.2rem]">
        TOP STORIES
      </h1>
      <section className="flex  flex-col md:flex-row ">
        <div className="w-full xl:w-6/12 md:p-5 flex flex-col  gap-3">
          <img
            src={TopArticles[0].img}
            alt="topstories"
            className="object-cover"
          />
          <p className="text-sm hover:underline cursor-pointer "
          onClick={(e)=>goToTopics(e)}
          >{TopArticles[0].topics[0]}</p>
          {/* <p className="uppercase font-bold pt-2 pb-1 hidden md:block">{TopArticles[0].mainHeader}</p> */}
          <p className="font-400 font-serif text-[20px] md:text-[28px] text-center md:text-start hover:underline cursor-pointer"
          onClick={(e)=>goToArticle(e)}>
            {TopArticles[0].mainHeader}
          </p>
          <p className="text-[14px] hidden md:block">
              {TopArticles[0].content.startsWith('<p')
              ? TopArticles[0].content
              .slice(17, 330)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              : TopArticles[0].content
              .slice(4, 330)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
                  }
            ...
          </p>
        </div>
        <div className="w-full xl:w-6/12 p-5 flex flex-col justify-between gap-3">
          <div className="flex justify-between md:gap-3 ">
            <img
              src={TopArticles[1].img}
              alt="topstories-1"
              className="w-[120px] h-[200px] object-cover sm:w-[290px]"
            />
            <div className="pl-3 md:pl-0 w-full sm:w-6/12">
              <p className="uppercase text-[13px] hover:underline cursor-pointer"
              onClick={(e)=>goToTopics(e)}
              >
                {TopArticles[1].topics[0]}
              </p>
              <p className="font-500 font-serif text-[15px] md:text-[17px] py-1 md:py-2 line-clamp-2 md:line-clamp-none hover:underline cursor-pointer"
              onClick={(e)=>goToArticle(e)}
              >
                {TopArticles[1].mainHeader}
              </p>
              <p className="pt-2 text-sm">{changeFormat(TopArticles[3].date)}</p>
            </div>
            <p></p>
          </div>
          <div className="flex justify-between md:gap-3  ">
            <img
              src={TopArticles[2].img}
              alt="topstories-1"
              className="w-[120px] h-[200px] object-cover sm:w-[290px] "
            />
            <div className="pl-3 md:pl-0 w-full sm:w-6/12">
              <p className="uppercase text-[13px] hover:underline cursor-pointer"
                            onClick={(e)=>goToTopics(e)}
                            >
                {TopArticles[2].topics[0]}
              </p>
              <p className="font-500 font-serif text-[15px] md:text-[17px] py-1 md:py-2 line-clamp-2 md:line-clamp-none hover:underline cursor-pointer"
              onClick={(e)=>goToArticle(e)}
              >
                {TopArticles[2].mainHeader}
              </p>
              <p className="pt-2 text-sm">{changeFormat(TopArticles[3].date)}</p>
            </div>
          </div>
          <div className="flex justify-between md:gap-3  ">
            <img
              src={TopArticles[3].img}
              alt="topstories-1"
              className="w-[120px] h-[200px] object-cover sm:w-[290px] "
            />
            <div className="pl-3 md:pl-0 w-full sm:w-6/12">
              <p className="uppercase text-[13px] text-sm hover:underline cursor-pointer"
                            onClick={(e)=>goToTopics(e)}
                            >
                {TopArticles[3].topics[0]}
              </p>
              <p className="font-600 font-serif text-[15px] md:text-[17px] py-1 md:py-2 line-clamp-2 md:line-clamp-none hover:underline cursor-pointer"
              onClick={(e)=>goToArticle(e)}
              >
                {TopArticles[3].mainHeader}
              </p>
              <p className="pt-2 text-sm">{changeFormat(TopArticles[3].date)}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default VelllTopStories
