import React from 'react'
import { useNavigate } from 'react-router-dom'
import { articles } from '../../utils/vellMagazineData'
import { Carousel } from 'flowbite-react'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import moment from 'moment';
import { headerSliderData } from '../../utils/vellMagazineData';


const VellHeader = () => {
  const navigate = useNavigate()
  const today=new Date()
  // const month=moment(today).format("LL").split(" ")[0]
  const headerArticles=headerSliderData?.filter(item=>item.theme="header").reverse()


  // const divPattern=/^<div>.*?<\/div>$/g
  // const indicators=document..querySelectorAll("button[data-testid='carousel-indicator']")
  // const hs=document.querySelector("button.bg-white")
  // const indexOfSlide=(Object.values(indicators).indexOf(hs));
  // console.log(hs);
  return (
      <Carousel slide={true} slideInterval={3000} leftControl={<IoIosArrowBack/>} rightControl={<IoIosArrowForward/>} indicators={true}  className="container xl:mt-[8rem] h-[700px] md:h-[650px] xl:h-[520px] pb-3 m-auto hs relative headerCarousel mt-[30px] sm:mt-0">
        {headerArticles.map((item) => {
          return (
            <header className="h-full flex flex-col-reverse xl:flex-row justify-end sm:justify-center items-start sm:items-center xl:px-[2rem] vellmagazine-header cursor-pointer" key={item.id}
            onClick={()=>navigate(`/article/${item.id}/${item.template}`)}     
            >
              <section className="xl:w-6/12 xl:p-5 text-center">
                <h1 className="font-400 text-[24px] xl:text-[50px] font-serif xl:leading-[3rem] mb-[1rem] line-clamp-4 pb-1">
                  {item.mainHeader}
                </h1>
                <p className="text-[18px] my-3 px-5 xl-px-0 homepageFont text-left">
                     {item.content
                    .slice(0, 230)}...
                </p>
                <button
                  className=" w-[130px] py-2 mt-3 homepageFont"
                  onClick={()=>navigate(`/article/${item.id}/${item.template}`)}  
                  >
                  See more
                </button>
              </section>
              <img
                src={item.img}
                alt="vellMagazineHeader"
                className="sm:w-[600px] xl:p-2 w-[375px] h-[375px] sm:h-[400px] lg:w-[700px] lg:h-[450px]  object-cover block m-auto xl:translate-y-[-20px]"
              />
              {/* <p className='absolute bottom-[-15%] left-[50%] translate-x-[-50%]'>{indexOfSlide+1}/{indicators.length}</p> */}
            </header>
          )
        })}
      </Carousel>
  )
}

export default VellHeader
