import PrivacyNavbar from "./PrivacyNavbar";
import React, { useEffect } from "react";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const TermOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PrivacyNavbar />
      <div>
        <main className="custom-container w-full max-w-[1040px] m-auto px-2 privacy-policy mt-[70px] sm:pt-5 pb-12">
          <h1 className="heading  text-center font-bold text-5xl py-10 uppercase">
            Terms and Conditions
          </h1>
          <div>
            <p>
              {" "}
              By using Vell Magazine’s website and services, you agree to these
              Terms and Conditions. Please read them carefully.
            </p>
            <p className="font-bold">Description of Services:</p>
            <p>
              Vell Magazine provides a digital fashion magazine and related
              product information. Our services are intended for personal use
              and not for commercial use.
            </p>
            <p className="font-bold">Accounts and Passwords:</p>
            <p>To access certain parts of our site and services, you may need to create an account.</p>
            <p>You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account.</p>
            <p>You agree to notify us immediately of any unauthorized use of your account or any other security breach.</p>
            <p className="font-bold">Intellectual Property:</p>
            <p>All content on our site, including but not limited to text, images, graphics, and code, is the property of Vell Magazine and is protected by copyright and other intellectual property laws.</p>
            <p>You may not use any content from our site for commercial purposes without our express written permission.</p>
            <p>You may use content from our site for personal, non-commercial purposes, provided that you retain all copyright and other proprietary notices.</p>
            <p className="font-bold">Links to Other Sites:</p>
            <p>Our site may contain links to other sites. We are not responsible for the privacy practices or content of those sites.</p>
            <p className="font-bold">Disclaimers:</p>
            <p>Our site and services are provided “as is” without warranties of any kind, either express or implied.</p>
            <p>We do not guarantee that our site or services will be error-free, secure, or uninterrupted.</p>
            <p>We are not responsible for any loss or damage that may result from your use of our site or services, including but not limited to loss of data or damage to your device.</p>
            <p className="font-bold">Limitation of Liability:</p>
            <p>In no event shall Vell Magazine be liable for any indirect, incidental, special, or consequential damages, or lost profits, arising from your use of our site or services, even if we have been advised of the possibility of such damages.</p>
            <p className="font-bold">Governing Law:</p>
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom.</p>
            <p>Any disputes arising from or related to these Terms and Conditions shall be resolved in the state or federal courts located in United Kingdom.</p>
            <p className="font-bold">Changes to these Terms:</p>
            <p>We may update these Terms and Conditions from time to time to reflect changes in our practices or applicable laws.</p>
            <p>Your continued use of the site after any changes indicates your acceptance of the new Terms and Conditions.</p>
            <p className="font-bold">Contact us:</p>
          <p>If you have any questions about Terms and Conditions, please contact us at </p>
          <p><a href="mailto:privacy@vellmagazine.com" target='_blank' className="text-blue-700">privacy@vellmagazine.com</a>.</p>

          </div>
        </main>
<Footer/>
      </div>
    </>
  );
};

export default TermOfUse;
