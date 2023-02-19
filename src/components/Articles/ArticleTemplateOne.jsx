import React from 'react'
import VellNavbar from '../VellMagazine/VellNavbar'
import { articles } from '../../utils/vellMagazineData'
import { useNavigate, useParams } from 'react-router-dom'
import {  AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok, FaFacebookF } from 'react-icons/fa'
import MoreLikeThisTemplate from './MoreLikeThisTemplate'
import Footer from '../Footer'
import { menuItems } from '../../utils/menuItems'
import { useContext } from 'react'
import { VellMagazineContext } from '../../context/VellMagazineContext'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'
import { BiCloudLightRain } from 'react-icons/bi'
import { createGlobalStyle } from 'styled-components'
import { useEffect } from 'react'



// import { useEffect } from 'react'


const ArticleTemplateOne = () => {
  const {scrollToTop}=useContext(VellMagazineContext)
    const navigate = useNavigate()
  const { id } = useParams()
  const currentArticle = articles.find((item) => item.id == id)

  console.log(id)
  console.log(articles)
  console.log(currentArticle)
const currentArticleTopics=currentArticle.topics
const arr=[]
  currentArticleTopics?.map((item)=>{
    // console.log(item,"item");
    return(
        articles.filter((item2)=>item2.topics.includes(item) && arr.push(item2))
        )})

        useEffect(() => {
          window.scrollTo(0, 0);
       }, []);
       
  const relevantArticles=arr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i).filter((item)=>item.id !== currentArticle.id)



  const breadcrump=menuItems.find(item=>{
    // console.log(item);
    return(
      item.submenu.find(item2=>item2.title.toUpperCase()===currentArticle.topics[0])
    )
  })
// console.log(breadcrump.title)

  return (
    <>
      <VellNavbar />
      <div
        className="mt-[130px] px-2 pb-12 articleTemplate w-full max-w-[1350px] m-auto"
        id={currentArticle.contentHeader}
      >
        <p className="p-3 text-sm">
          {/* {breadcrump.title}/{currentArticle.topics[0]}{' '} */}
        </p>
        <h1 className="font-medium font-serif text-[40px]  py-2 px-3">
          {currentArticle.contentHeader}
        </h1>
        <h3 className="px-3 font-bold italic">{currentArticle.subHeader}</h3>

        <p className="px-3 text-[13px]">
          BY <span className="underline px-1 font-semibold">VellMagazine</span>{' '}
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
        <main className="flex flex-col lg:flex-row">
          <div className="w-full max-w-[900px] lg:w-8/12 m-auto ">
            <img
              src={currentArticle.img}
              alt="img"
              className="h-[350px]  object-cover pr-5 block m-auto my-3 "
            />
            <p
              dangerouslySetInnerHTML={{ __html: currentArticle.content }}
              className="content p-3"
            ></p>
            <div className="flex justify-start items-center p-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2 w-5/12 ">
                <p className="font-semibold">Share via</p>
                <div className="flex items-center justify-start gap-2">
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
          <div className="w-full lg:w-4/12 px-5 mt-3">
            <h3 className="text-2xl text-center sm:text-left">
              More like this
            </h3>
            <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
              {relevantArticles.map((item) => {
                return <MoreLikeThisTemplate item={item} key={item.id} />
              })}
            </div>
          </div>
        </main>
      </div>
     <Footer/>
    </>
  )
}



export default ArticleTemplateOne