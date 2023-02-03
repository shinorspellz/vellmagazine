import React from 'react'
import VellNavbar from '../VellMagazine/VellNavbar'
import { articles } from '../../utils/vellMagazineData'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok, FaFacebookF } from 'react-icons/fa'
import { useEffect } from 'react'

const ArticleTemplate = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const currentArticle = articles.find((item) => item.id == id)

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);


  return (
    <div>
      <VellNavbar />
      <div className="mt-[130px] px-2 pb-12 articleTemplate">
        <>

        <p className='font-medium font-serif  text-center text-[40px]  py-5 px-3'>{currentArticle.contentHeader}</p>
      
          <div className="max-w-[900px] m-auto">
            <img
              src={currentArticle.img}
              alt="img"
              className="float-left h-[400px] max-w-[450px] object-cover pr-5"
            />
            <p
              dangerouslySetInnerHTML={{ __html: currentArticle.content }}
              className="content"
            ></p>
            <div className="flex justify-between p-3">
              <div className="text-3xl share flex justify-center gap-4 items-center ">
                {/* <span className='text-lg'>Share the post</span> */}
              <AiOutlineInstagram className='cursor-pointer'/>
              <AiOutlineTwitter className='cursor-pointer'/>
              <FaFacebookF className='cursor-pointer'/>
              <FaTiktok className='cursor-pointer'/>
              </div>
              <p>
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

        </>
      </div>
    </div>
  )
}

export default ArticleTemplate
