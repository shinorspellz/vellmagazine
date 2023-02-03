import { footerData } from '../../utils/vellMagazineData'
import { Link } from 'react-router-dom'
import SingleFooterImg from './SingleFooterImg'
import { RiLinkedinFill } from 'react-icons/ri'
import { IoIosArrowDropup } from 'react-icons/io'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok, FaFacebookF } from 'react-icons/fa'
import { useContext } from 'react'
import { VellMagazineContext } from '../../context/VellMagazineContext'



const VellFooter = () => {
  const {theme}=useContext(VellMagazineContext)


  return (
    <main className=" vellmagazine-footer max-w-full">
      <div className="flex flex-col justify-center items-center  m-auto h-[250px] gap-[1rem] ">
        <div className="flex md:mr-[33.5rem]">
          {
            theme=="light-theme" ? (<img
              src="/images/Logo.png"
              alt="logo"
              className='w-[160px] h-[36px]'
            />):(
              <img
              src="/images/logoForDarkMode.png"
              alt="logo"
              className='w-[160px] h-[36px]'
            />
            )
          }
              
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full mt-3 gap-5 md:gap-[10rem] ">
          <h1 className="font-500 font-serif text-[25px] max-w-[300px] md:max-w-[385px] ">
            Take control of your creative future, sign up today!
          </h1>
          <button className="w-[150px] my-2 visitBtn">
            <Link to="/">Visit Website</Link>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-16 ">
        {footerData?.map((item, index) => {
          return <SingleFooterImg key={index} item={item} />
        })}
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
          <Link
        to="/cookiespolicy"
        >
          Cookies Policy
        </Link>
            <Link to="/privacypolicy">
              Privacy Policy
            </Link>
            <Link to="/termofuse">
              Terms of Use
            </Link>
          </p>
          <p className="text-[#8F8383] pt-5 md:pt-0 py-1">
            ©{new Date().getFullYear()}  VModel reserved.
          </p>
        </section>
        <a href="#vellnavbar">
          <IoIosArrowDropup className="text-white text-3xl absolute right-3 bottom-3" />
        </a>
      </div>
    </main>
  )
}

export default VellFooter
