import { RiLinkedinFill } from "react-icons/ri";
import { IoIosArrowDropup } from "react-icons/io";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { VellMagazineContext } from "../context/VellMagazineContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme,scrollToTop, currentArticle } = useContext(VellMagazineContext);
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setShowButton(true);
      } else {
        setShowButton(false)
      }
    }

    window.onscroll = () => {
      handleScroll()
    }

  }, [])

// Share on LinkedIn
function shareOnLinkedIn() {
  // Set the URL and title of the website to share
  const websiteUrl = "https://www.vellmagazine.com/";
  const websiteTitle = "Vell Magazine";
  
  // Construct the LinkedIn sharing URL
  const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(websiteUrl)}&title=${encodeURIComponent(websiteTitle)}`;
  
  // Open a new window to share the URL on LinkedIn
  window.open(shareUrl, '_blank');
}

// Share on Twitter
function shareOnTwitter() {
  const articleUrl = window.location.href;
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${document.title}`;
  window.open(shareUrl, '_blank');
}

  
  
  return (
    <div className="flex flex-col md:flex-row footer-bottom relative pt-8 md:pt-14 pb-16 md:pb-20 ">
        <section className="w-full md:w-6/12 flex flex-col justify-end items-end ">
          <h1 className="italic text-[25px] w-full md:w-9/12 py-1 font-serif pl-5 md:pl-0">
            Vell Magazine
          </h1>
          <div className="items-center gap-3 socials ">
            <button className=" w-[45px] h-[45px] flex justify-start items-center" onClick={shareOnLinkedIn}>
              <RiLinkedinFill className="w-[20px] h-[20px]" />
            </button>
            <a href="https://www.instagram.com/vellmagazine/" target="_blank">
              <button className=" w-[45px] h-[45px] flex justify-start items-center">
                <AiOutlineInstagram className="w-[20px] h-[20px]" />
              </button>
            </a>
            {/* <a
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
            </a> */}
            <a href="https://twitter.com/vellmagazine" target="_blank">
              <button className=" w-[45px] h-[45px] flex justify-start items-center" onClick={shareOnTwitter}>
                <AiOutlineTwitter className="w-[20px] h-[20px]" />
              </button>
            </a>
          </div>
        </section>
        <section className="w-full md:w-6/12 text-[14px] pl-5 md:pl-16">
          {/* <p className="grid grid-cols-3 sm:grid-cols-5 items-center gap-3 sm:gap-4 py-1 text-[#C1BBBB]"> */}
          <p className="flex pr-2 sm:pr-0 justify-start flex-wrap items-center gap-3 sm:gap-4 py-1 text-[#C1BBBB]">
            <Link to="/cookiespolicy" className="hover:underline">Cookies Policy</Link>
            <Link to="/privacypolicy" className="hover:underline">Privacy Policy</Link>
            <Link to="/termofuse" className="hover:underline">Terms of Use</Link>
            <Link to="/aboutus" className="hover:underline">About Us</Link>
            <Link to="/authors" className="hover:underline">Authors</Link>
          </p>
          <p className="text-[#8F8383] pt-5 md:pt-0 py-1">
            ©{new Date().getFullYear()} VModel reserved.
          </p>
        </section>
        {showButton && (
          <a href="" onClick={scrollToTop}>
          <IoIosArrowDropup className=" text-3xl fixed right-3 bottom-3 scrollUpBtn rounded-full" />
        </a>
        )}
        
      </div>
  )
}

export default Footer