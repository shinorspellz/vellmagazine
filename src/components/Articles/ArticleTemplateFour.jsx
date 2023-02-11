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
  InstapaperShareButton,
  InstapaperIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'
import { VellMagazineContext } from '../../context/VellMagazineContext'

// import { useEffect } from 'react'

const ArticleTemplateFour = () => {
  const navigate = useNavigate()
  const {scrollToTop}=useContext(VellMagazineContext)
  const { id } = useParams()
  const currentArticle = articles.find((item) => item.id == id)
  const currentArticleTopics = currentArticle.topics
  const arr = []
  currentArticleTopics.map((item) => {
    // console.log(item,"item");
    return articles.filter(
      (item2) => item2.topics.includes(item) && arr.push(item2)
    )
  })

  const relevantArticles = arr
    .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i)
    .filter((item) => item.id !== currentArticle.id)

  const breadcrump = menuItems.find((item) => {
    // console.log(item);
    return item.submenu.find((item2) =>
      item2.title.toUpperCase() === currentArticle.topics[0]
        ? currentArticle.topics[0]
        : ' '
    )
  })
  // console.log(breadcrump.title)

  return (
    <>
      <VellNavbar />
      <div className="relative h-[450px] mt-[130px]">
        <img
          src={currentArticle.img}
          alt="img"
          className="h-full w-full px-2 sm:px-0 object-cover  sm:block sm:m-auto my-3 block "
        />
        <div className="absolute w-full z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] articleTemplateFour">
          <div
            className=" px-2 pb-12 articleTemplate w-full max-w-[1350px] m-auto"
            id={currentArticle.contentHeader}
          >
            <p className="p-3 text-sm text-center">
              {breadcrump?.title}/{currentArticle.topics[0]}{' '}
            </p>
            <h1 className="font-medium font-serif text-[40px]  py-2  text-center">
              {currentArticle.contentHeader}
            </h1>
            <h3 className="px-3 font-bold italic text-center">
              {currentArticle.subHeader}
            </h3>
            <div className="flex flex-col items-center justify-center">
              <p className="px-3 text-[13px] text-center">
                BY{' '}
                <span className="underline px-1 font-semibold">
                  VellMagazine
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
        <div className="w-full max-w-[850px] lg:w-8/12 m-auto ">
          <p
            dangerouslySetInnerHTML={{ __html: currentArticle.content }}
            className="content p-3 articleTemplateFive-content"
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

      <Footer/>
    </>
  )
}

export default ArticleTemplateFour
