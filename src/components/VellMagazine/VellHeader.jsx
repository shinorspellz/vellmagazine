import React from 'react'
import { useNavigate } from 'react-router-dom'
import { articles } from '../../utils/vellMagazineData'
import { Carousel } from 'flowbite-react'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const VellHeader = () => {
  const navigate = useNavigate()
  const headerArticles=articles.slice(0,7)
  // const indicators=document.querySelectorAll("button[data-testid='carousel-indicator']")
  // const hs=document.querySelector("button.bg-white")
  // const indexOfSlide=(Object.values(indicators).indexOf(hs));
  // console.log(hs);
  return (
      <Carousel slideInterval={5000} leftControl={<IoIosArrowBack/>} rightControl={<IoIosArrowForward/>} indicators={true}  className="container mt-[6rem] xl:mt-[8rem] h-[700px] md:h-[650px] xl:h-[520px] pb-3 m-auto hs relative headerCarousel">
        {headerArticles.map((item) => {
          return (
            <header className="flex flex-col-reverse xl:flex-row justify-between items-center  xl:px-[2rem] vellmagazine-header cursor-pointer" key={item.id}
            onClick={()=>navigate(`/article/${item.id}/${item.template}`)}     
            >
              <section className="xl:w-6/12 xl:p-5 text-center">
                <h1 className="font-500 text-[24px] py-2 xl:py-0 xl:text-[50px] font-serif xl:leading-[3rem] mb-[1rem]">
                  {item.contentHeader}
                </h1>
                <p className="text-[14px] my-3 px-5 xl-px-0 ">
                  {item.content.startsWith('<p')
                    ? item.content
                    .slice(17, 330)
                    .replace(/(<p>)/g, '')
                    .replace(/<.?p[^>]*>/g, '')
                    .replace(/<.?h.?[^>]*>/g, '')
                    .replace(/<.?ol.?[^>]*>/g, '')
                    .replace(/<.?li.?[^>]*>/g, '')
                    : item.content
                    .slice(4, 330)
                    .replace(/(<p>)/g, '')
                    .replace(/<.?p[^>]*>/g, '')
                    .replace(/<.?h.?[^>]*>/g, '')
                    .replace(/<.?ol.?[^>]*>/g, '')
                    .replace(/<.?li.?[^>]*>/g, '')
                        }
                  ...
                </p>
                <button
                  className=" w-[130px] py-2 mt-3"
                  onClick={()=>navigate(`/article/${item.id}/${item.template}`)}  
                  >
                  See more
                </button>
              </section>
              <img
                src={item.img}
                alt="vellMagazineHeader"
                className="xl:w-6/12 xl:p-5 w-full max-w-[628px] "
              />
              {/* <p className='absolute bottom-[-15%] left-[50%] translate-x-[-50%]'>{indexOfSlide+1}/{indicators.length}</p> */}
            </header>
          )
        })}
      </Carousel>
  )
}

export default VellHeader
