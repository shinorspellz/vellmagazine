import PrivacyNavbar from './PrivacyNavbar'
import React, { useEffect } from 'react'
import { IoLogoGooglePlaystore,IoLogoApple } from 'react-icons/io5'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok, FaFacebookF } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const TermOfUse = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  return (
    <>
    <PrivacyNavbar/>
    <div>
        <main className='custom-container w-full max-w-[1040px] m-auto px-2'>
        <h1 className='heading mt-[100px] text-center font-bold text-5xl py-10'>Terms Of Use</h1>
        <div >
          <p >Welcome to VModel Ltd. (&quot;VModel&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), an online platform that connects models, creators, and pets with booking opportunities. By using our website, mobile application, and other services (collectively, the &quot;Service&quot;), you agree to be bound by the following terms and conditions (the &quot;Terms&quot;).</p>

          <ol className='list-decimal list-inside '>
            <li className='mb-[1rem] mt-[1rem]'>Eligibility: You must be at least 18 years of age and have the legal right and ability to enter into these Terms in order to use the Service.
            </li>
            <li className='mb-[1rem]'>User Account: To access certain features of the Service, you will be required to register and create an account. You agree to provide accurate, current and complete information about yourself, and maintain and promptly update your account information.
            </li>
            <li className='mb-[1rem] '>Content: You are responsible for all content that you upload, post, or otherwise make available through the Service, including but not limited to text, images, videos, and audio files (&quot;User Content&quot;). By making any User Content available through the Service, you grant VModel a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all formats and distribution channels now known or hereafter devised (the &quot;License&quot;). You represent and warrant that you have all rights, licenses, consents, and releases necessary to grant the License to VModel.
            </li>
            <li className='mb-[1rem] '>
            Prohibited Content: You agree not to upload, post, or otherwise make available through the Service any User Content that: (a) is offensive, abusive, defamatory, pornographic, or otherwise inappropriate; (b) infringes any intellectual property rights or other rights of any third party; or (c) contains any viruses, Trojan horses, worms, time bombs, or other harmful or deleterious files.
            </li>
            <li className='mb-[1rem] '>
            Bookings: When you book a model, creator, or pet through the Service, you are entering into a legally binding contract with that individual. You are responsible for all costs associated with the booking, including but not limited to travel and accommodation expenses.
            </li>
            <li className='mb-[1rem] '>
            Payment: All payments for bookings made through the Service will be processed through a third-party payment processor. By making a payment, you agree to the terms and conditions of the payment processor.
            </li>
            <li className='mb-[1rem] '>
            Termination: VModel reserves the right to terminate your account and access to the Service at any time and for any reason.
            </li>
            <li className='mb-[1rem] '>
            Disclaimer of Warranties: The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. VModel does not warrant that the Service will be uninterrupted or error-free.
            </li>
            <li className='mb-[1rem] '>
            Limitation of Liability: VModel shall not be liable for any damages resulting from the use of or inability to use the Service, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </li>
            <li className='mb-[1rem] '>
            Governing Law: These Terms shall be governed by the laws of the country in which VModel is headquartered, without giving effect to any principles of conflicts of law.
            </li>
            <li className='mb-[1rem] '>
            Changes to the Terms: VModel reserves the right to modify these Terms at any time and without prior notice. Your continued use of the Service following any such modifications constitutes your acceptance of the new Terms.
            </li>
            <li className='mb-[1rem] '>
            Contact Us: If you have any questions about these Terms, please contact us at [insert contact information].
            </li>
          </ol>

          <p>By using the Service, you acknowledge that you have read and agree to be bound by these Terms.</p>
        </div>
        </main>
       
        <div className='privacy-footer flex items-center relative pt-12 pb-[80px] mt-[300px]'>
        <div className=' flex justify-center md:justify-between items-start flex-col-reverse md:flex-row w-full md:w-9/12 m-auto md:m-0 gap-5 md:gap-0'>
          <div className='md:pl-12 md:flex-[45%_0] w-full px-3 md:px-0'>
             <div className='bg-white  flex m-auto items-center p-1 rounded-xl justify-between  '>
            <input type="text" placeholder='Enter Your Email' className=' border-0 focus:ring-0 outline-none w-8/12 md:w-9/12'/>
            <button className=' text-md p-1 py-2 rounded-lg w-4/12 md:w-3/12'>Sign me up!</button>
          </div>
          <div className='flex justify-center md:justify-start items-center gap-6 privacy-policy-btns mt-8 font-bold'>
          <button className='flex justify-center items-center gap-1  w-[128px] h-[40px] text-sm rounded-lg'>
            <IoLogoApple/>
            App Store
          </button>
          <button className='flex justify-center items-center gap-1 w-[128px] h-[40px] text-sm rounded-lg'>
            <IoLogoGooglePlaystore/>
            Google Play
          </button>
          </div>
          </div>
         
        <h1 className='text-white font-bold text-3xl md:text-4xl w-full md:w-6/12 pl-2 m-auto md:m-0  '>Take control of your creative future,sign up today</h1>
        </div>
        <img src="./images/sign-person.jpg" alt="privacypolicy" className='absolute bottom-0 right-0 lg:h-[500px] hidden md:block object-cover' />
      </div>
      <div className="flex justify-center items-center gap-8  py-6  w-full px-1 privacy-btns">
      <a href="https://www.linkedin.com/company/vmodel/mycompany/" target="_blank">
        <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <RiLinkedinFill className="w-[20px] h-[20px]" />
        </button>
      </a>
      <a href="https://www.instagram.com/Vmodelapp/" target="_blank">
        <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <AiOutlineInstagram className="w-[20px] h-[20px]" />
        </button>
        </a>
        
        <a href="https://www.tiktok.com/@vmodelapp?_t=8Ue1EF8JWMg&_r=1"target="_blank">
         <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <FaTiktok className="w-[20px] h-[20px]" />
        </button>
        </a>
        <a href="">
        <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <FaFacebookF className="w-[20px] h-[20px]" />
        </button>
        </a>
        <a href="https://twitter.com/VModelapp" target="_blank">
           <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <AiOutlineTwitter className="w-[20px] h-[20px]" />
        </button>
        </a>
       
      </div>
      <div className='flex justify-center items-center gap-6 pb-9 privacy-policy-links'>
      <NavLink
        to="/cookiespolicy"
        >
          Cookies Policy
        </NavLink>
        <NavLink
        to="/privacypolicy"
        >
          Privacy Policy
        </NavLink>
        <NavLink
                to="/termofuse"
        >
          Terms Of Use
        </NavLink>
        <NavLink to="/">
          Vell Magazine
        </NavLink>
      </div>    
    </div>
    </>
  )
}

export default TermOfUse