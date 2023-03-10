import React, { useContext } from 'react'
import VellNavbar from '../VellMagazine/VellNavbar'
import { articles } from '../../utils/vellMagazineData'
import {  useNavigate, useParams } from 'react-router-dom'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok, FaFacebookF } from 'react-icons/fa'
import Footer from '../Footer'

import { menuItems } from '../../utils/menuItems'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'
import { useEffect } from 'react'
import RecommendedArticles from './RecommendedArticles'
import Slider from "react-slick";


const ArticleTemplateSix = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const currentArticle = articles.find((item) => item.id == id)
console.log(currentArticle)
  const breadcrump = menuItems.find((item) => {
    // console.log(item);
    return item.submenu.find((item2) =>
      item2.title.toUpperCase() == currentArticle.topics[0]
        ? currentArticle.topics[0]
        : ' '
    )
  })
  const currentArticleTopics=currentArticle.topics
  const arr=[]
  currentArticleTopics.map((item)=>{
    // console.log(item,"item");
    return(
        articles.filter((item2)=>item2.topics.includes(item) && arr.push(item2))
        )})
  const relevantArticles=arr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i).filter((item)=>item.id !== currentArticle.id)

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
 const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: relevantArticles.length>4 ? 5 :relevantArticles.length,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  prevArrow: "",
  nextArrow: "",
  responsive: [
    {
      breakpoint:1300,
      settings:{
      slidesToShow: relevantArticles.length>3 ? 4 :relevantArticles.length,
      }
     
      }, 
    {
      breakpoint:1000,
      settings:{
        slidesToShow: relevantArticles.length>2 ? 3 :relevantArticles.length,
      }
     
      }, 
    {
      breakpoint:800,
      settings:{
        slidesToShow: relevantArticles.length>1 ? 2 :relevantArticles.length,
      }
     
      }, 
    {
      breakpoint:500,
      settings:{
      slidesToShow: 1,
      }
     
      }, 
    ]
};



  return (
    <>
      <VellNavbar />
      <div className="relative mt-[50px] sm:mt-[115px] w-full ">
        <div className="articleTemplateSix ">
        <img
          src={currentArticle.img}
          alt="img"
          className= "object-cover h-[400px] w-full "
        />
        {/* <div className='absolute top-[300px] lg:left-[150px] flex justify-start max-w-[650px] px-2 articleTemplateSix-header'>
            <h1 className=" z-20 text-xl md:text-2xl lg:text-3xl font-bold">Lorem ipsum dolor sit amet consectetur voluptates commodi beatae neque animi? </h1>
        </div> */}
     
          <div
            className=" px-2 pb-12 articleTemplate w-full max-w-[850px] lg:ml-[150px] "
            id={currentArticle.contentHeader}
          >
            <p className="p-3 text-sm text-left">
              {breadcrump?.title}/{currentArticle.topics[0]}{' '}
            </p>
            <h1 className="font-medium font-serif text-[40px] px-2 py-2 text-left">
              {currentArticle.mainHeader}
            </h1>
            <h3 className="px-3 font-bold italic text-left">
              {currentArticle.subHeader}
            </h3>
            <div className="flex flex-col items-start justify-center">
              <p className="px-3 text-[13px] text-left">
                BY{' '}
                <span className="underline px-1 font-semibold cursor-pointer"
                 onClick={() =>
                  navigate(`/author/${currentArticle.author}`, {
                    state: `${currentArticle.author}`
                  })
                }
                >
                {currentArticle.author}
                </span>{' '}
                / {currentArticle.date}
              </p>
              <div className="flex justify-start items-center gap-4 p-3 articleTemplate-btns">
                <button className=" w-[30px] h-[30px] flex justify-center items-center rounded-full">
                  <FaFacebookF className="w-[20px] h-[20px]" />
                </button>
                <a href="https://twitter.com/VModelapp" target="_blank">
                  <button className=" w-[30px] h-[30px] flex justify-center items-center rounded-full">
                    <AiOutlineTwitter className="w-[20px] h-[20px]" />
                  </button>
                </a>
                <a href="https://www.instagram.com/Vmodelapp/" target="_blank">
                  <button className=" w-[30px] h-[30px] flex justify-center items-center rounded-full">
                    <AiOutlineInstagram className="w-[20px] h-[20px]" />
                  </button>
                </a>
                <a
                  href="https://www.tiktok.com/@vmodelapp?_t=8Ue1EF8JWMg&_r=1"
                  target="_blank"
                >
                  <button className=" w-[30px] h-[30px] flex justify-center items-center rounded-full">
                    <FaTiktok className="w-[20px] h-[20px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex flex-col lg:flex-row articleTemplate">
        <div className="w-full max-w-[850px] lg:w-8/12 lg:pl-[150px] ">
        <p
            dangerouslySetInnerHTML={{__html:currentArticle.content}}
            className="content p-3 articleTemplateSix-content"
          ></p>
          <div className="flex justify-start items-center p-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2 w-5/12 ">
              <p className='font-semibold'>Share via</p>
              <div className='flex items-center justify-start gap-2'>
              <FacebookShareButton
                url={window.location.href}
                quote={currentArticle.mainHeader}
                hashtag="#vellmagazine"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={window.location.href}
                quote={currentArticle.mainHeader}
                hashtag="#vellmagazine"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton
                url={window.location.href}
                quote={currentArticle.mainHeader}
                hashtag="#vellmagazine"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <EmailShareButton
                url={window.location.href}
                quote={currentArticle.mainHeader}
                hashtag="#vellmagazine"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>

              </div>
                          </div>
            <p className="w-7/12 text-right">
              Written by{' '}
              <span
                className="font-bold cursor-pointer"
                onClick={() =>
                  navigate(`/author/${currentArticle.author}`, {
                    state: `${currentArticle.author}`
                  })
                }
              >
                {currentArticle.author}
              </span>
            </p>
          </div>
        </div>
      </main>
      {relevantArticles.length>1 && ( <section className='recommendedArticles py-5'>
        <h3 className='text-center text-lg sm:text-xl py-4 font-serif'>RECOMMENDED ARTICLES</h3>
      <Slider {...settings} className="container m-auto ">
                {relevantArticles?.map((item,index) => {
              return (
                <ul className="m-auto" key={item.id}>
                <li className="list-unstyled mx-2 "><RecommendedArticles item={item}  index={index}/></li>
                </ul>
                );
              })}
      </Slider>
      </section>)}
      <Footer/>

    
    </>
  )
}

export default ArticleTemplateSix
