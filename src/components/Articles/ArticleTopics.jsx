import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { articles } from '../../utils/vellMagazineData'
import VellNavbar from '../VellMagazine/VellNavbar'
import ArticleMainHeader from './ArticleMainHeader'
import { RiLinkedinFill } from "react-icons/ri";
import { IoIosArrowDropup } from "react-icons/io";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { VellMagazineContext } from '../../context/VellMagazineContext'

const ArticleTopics = () => {
  const {state}=useLocation()
  const {scrollToTop}=useContext(VellMagazineContext)

  const newArticleList=articles.filter(item=>item.topics?.includes(state))

return (
  <> 
  <VellNavbar/>
  
  {/* <div className='mt-[120px] px-9 flex gap-8 justify-start flex-wrap container m-auto py-5'> */}
  <div className='mt-[120px] grid gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-9 m-auto py-5 justify-center max-w-[1400px]'>
      {
          newArticleList.map((item,index)=>{
              return(
                  <div key={index}>
                        <ArticleMainHeader item={item} state={state} />
                  </div>
              )
          })
      }
 
  </div>
  <div className="flex flex-col md:flex-row footer-bottom relative pt-8 md:pt-14 pb-16 md:pb-20 " >
        <section className="w-full md:w-6/12 flex flex-col justify-end items-end ">
          <h1 className="italic text-[25px] w-full md:w-9/12 py-1 font-serif pl-5 md:pl-0">
            Vell Magazine
          </h1>
          <div className="flex justify-start items-center gap-3 w-full md:w-9/12 pl-5 md:pl-0 py-1">
            <a
              href="https://www.linkedin.com/company/vmodel/mycompany/"
              target="_blank"
            >
              <button className=" w-[40px] h-[40px] flex justify-start items-center">
                <RiLinkedinFill className="w-[20px] h-[20px]" />
              </button>
            </a>
            <a href="https://www.instagram.com/Vmodelapp/" target="_blank">
              <button className=" w-[40px] h-[40px] flex justify-start items-center">
                <AiOutlineInstagram className="w-[20px] h-[20px]" />
              </button>
            </a>
            <a
              href="https://www.tiktok.com/@vmodelapp?_t=8Ue1EF8JWMg&_r=1"
              target="_blank"
            >
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
        <p className="flex justify-start items-center gap-3 sm:gap-4 py-1 text-[#C1BBBB]">
            <Link to="cookiespolicy">Cookies Policy</Link>
            <Link to="privacypolicy">Privacy Policy</Link>
            <Link to="termofuse">Terms of Use</Link>
            <Link to="authors">Authors</Link>
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

export default ArticleTopics