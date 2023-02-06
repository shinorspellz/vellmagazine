import React, { useContext } from 'react'
import VellNavbar from '../VellMagazine/VellNavbar'
import { articles } from '../../utils/vellMagazineData'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {  AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok, FaFacebookF } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
import { IoIosArrowDropup } from 'react-icons/io'
import { menuItems } from '../../utils/menuItems'
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
import { VellMagazineContext } from '../../context/VellMagazineContext'


// import { useEffect } from 'react'


const ArticleTemplateTwo = () => {
    const navigate = useNavigate()
    const {scrollToTop}=useContext(VellMagazineContext)
  const { id } = useParams()
  const currentArticle = articles.find((item) => item.id == id)
const currentArticleTopics=currentArticle.topics
const arr=[]
  currentArticleTopics.map((item)=>{
    // console.log(item,"item");
    return(
        articles.filter((item2)=>item2.topics.includes(item) && arr.push(item2))
        )})

  const relevantArticles=arr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i).filter((item)=>item.id !== currentArticle.id)


  
  const breadcrump=menuItems.find(item=>{
    // console.log(item);
    return(
      item.submenu.find(item2=>item2.title.toUpperCase()==currentArticle.topics[0] ? currentArticle.topics[0] : " ")
    )
  })
// console.log(breadcrump.title)

  return (
    <>
      <VellNavbar />
      <div className="mt-[130px] px-2 pb-12 articleTemplate w-full max-w-[1350px] m-auto" id={currentArticle.contentHeader}>
        <p className='p-3 text-sm text-center' >{breadcrump?.title}/{currentArticle.topics[0]} </p>
        <h1 className='font-medium font-serif text-[40px]  py-2  text-center' >{currentArticle.contentHeader}</h1>
        <h3 className='px-3 font-bold italic text-center'>{currentArticle.subHeader}</h3>
<div className='flex flex-col sm:flex-row items-center justify-center'>
<p className='px-3 text-[13px] text-center'>BY <span className='underline px-1 font-semibold'>VellMagazine</span> / {currentArticle.date}</p>
        <div className='flex justify-start items-center gap-4 p-3 articleTemplate-btns'>
        <button className=' w-[30px] h-[30px] flex justify-center items-center rounded-full'>
<FaFacebookF className='w-[20px] h-[20px]'/>
        </button>
        <a href="https://twitter.com/VModelapp" target="_blank">
        <button className=' w-[30px] h-[30px] flex justify-center items-center rounded-full'>
<AiOutlineTwitter className='w-[20px] h-[20px]'/>
        </button>
        </a>
                <a href="https://www.instagram.com/Vmodelapp/" target="_blank">
                <button className=' w-[30px] h-[30px] flex justify-center items-center rounded-full'>
<AiOutlineInstagram className='w-[20px] h-[20px]'/>
        </button>
                </a>
                <a href="https://www.tiktok.com/@vmodelapp?_t=8Ue1EF8JWMg&_r=1" target="_blank">
                <button className=' w-[30px] h-[30px] flex justify-center items-center rounded-full'>
<FaTiktok className='w-[20px] h-[20px]'/>
        </button>
                </a>
        </div>
</div>
        
<main className='flex flex-col lg:flex-row'>
    <div className="w-full max-w-[850px] lg:w-8/12 m-auto ">
            <img
              src={currentArticle.img}
              alt="img"
              className="h-[350px] w-full  object-cover pr-5 sm:block sm:m-auto my-3 translate-x-[10px] sm:translate-x-0 "
            />
            <p
              dangerouslySetInnerHTML={{ __html: currentArticle.content }}
              className="content p-3"
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
      </div>
      <div className="flex flex-col md:flex-row footer-bottom relative pt-8 md:pt-14 pb-16 md:pb-20 ">
        <section className="w-full md:w-6/12 flex flex-col justify-end items-end ">
          <h1 className="italic text-[25px] w-full md:w-9/12 py-1 font-serif pl-5 md:pl-0">
            Vell Magazine
          </h1>
          <div className="flex justify-start items-center gap-3 w-full md:w-9/12 pl-5 md:pl-0 py-1">
          <a href="https://www.linkedin.com/company/vmodel/mycompany/" target="_blank">
              <button className=" w-[40px] h-[40px] flex justify-start items-center">
                <RiLinkedinFill className="w-[20px] h-[20px]" />
              </button>
            </a>
            <a href="https://www.instagram.com/Vmodelapp/" target="_blank">
                <button className=" w-[40px] h-[40px] flex justify-start items-center">
              <AiOutlineInstagram className="w-[20px] h-[20px]" />
            </button>
            </a>
            <a href="https://www.tiktok.com/@vmodelapp?_t=8Ue1EF8JWMg&_r=1" target="_blank">
                <button className=" w-[40px] h-[40px] flex justify-start items-center">
              <FaTiktok className="w-[20px] h-[20px]" />
            </button>
            </a>
            <a href="">
                <button className=" w-[40px] h-[40px] flex justify-start items-center">
              <FaFacebookF className="w-[20px] h-[20px]" />
            </button>
            </a>
            <a href="https://twitter.com/VModelapp" target="_blank">
            <button className=" w-[40px] h-[40px] flex justify-start items-center">
              <AiOutlineTwitter className="w-[20px] h-[20px]" />
            </button>
            </a>
          </div>
        </section>
        <section className="w-full md:w-6/12 text-[14px] pl-5 md:pl-16">
          <p className="flex justify-start items-center gap-4 py-1 text-[#C1BBBB]">
          <Link to="/cookiespolicy">Cookies Policy</Link>
            <Link to="/privacypolicy">Privacy Policy</Link>
            <Link to="/termofuse">Terms of Use</Link>
          </p>
          <p className="text-[#8F8383] pt-5 md:pt-0 py-1">
            ©{new Date().getFullYear()} VModel reserved.
          </p>
        </section>
        <a href="" onClick={scrollToTop}>
          <IoIosArrowDropup className="text-white text-3xl absolute right-3 bottom-3" />
        </a>
      </div>
    </>
  )
}



export default ArticleTemplateTwo