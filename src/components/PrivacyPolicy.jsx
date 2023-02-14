import PrivacyNavbar from "./PrivacyNavbar";
import React, { useEffect } from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  return (
    <>
      <PrivacyNavbar />
      <div className="custom-container privacy-policy w-full max-w-[1040px] m-auto px-2 pb-12 mt-[70px] sm:pt-5">
        <h1 className="heading  text-center font-bold text-5xl pb-5 ">
          PRIVACY POLICY
        </h1>
        <div className="rich-text-block w-richtext">
          <h4>Vell Magazine Privacy Policy</h4>
          <p>
            At Vell Magazine, we are committed to protecting the privacy of our
            users. This Privacy Policy outlines the information we collect, how
            we use it, and your rights regarding it.
          </p>
          <h4 className="font-bold">Information we collect:</h4>
          <p>
            Personal information, such as your name, email address, and other
            contact information you provide when subscribing to our magazine or
            creating an account.
          </p>
          <p>
            Purchase history, including the products you have purchased through
            our website.
          </p>
          <p>
            Usage information, such as pages visited, time spent on the site,
            and device information.
          </p>
          <h4 className="font-bold">How we use the information:</h4>
          <p>To provide you with the services you requested, such as delivering the digital magazine and processing orders.</p>
          <p>To personalize your experience, such as showing you recommendations based on your purchase history.</p>
          <p>To communicate with you, such as sending you newsletters or alerts about new products and promotions.</p>
          <p>To improve our products and services, such as using usage information to identify trends and improve the user experience.</p>
          <h4 className="font-bold">Sharing of information:</h4>
          <p>We will not sell or rent your personal information to third parties.</p>
          <p>We may share your information with service providers who assist us in providing the services we offer, such as payment processors and email service providers.</p>
          <p>We may disclose your information as required by law or in response to legal process.</p>
          <h4 className="font-bold">Data Security:</h4>
          <p>We take reasonable steps to protect your information from unauthorized access and to maintain its accuracy.</p>
          <p>However, no security measures are perfect and we cannot guarantee that your information will not be disclosed in unauthorized ways.</p>
          <h4 className="font-bold">Cookies:</h4>
          <p>We use cookies and other technologies to improve your experience and to understand how our website is used.</p>
          <p>You can control the use of cookies through your browser settings.</p>
          <h4 className="font-bold">Changes to this Policy:</h4>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.</p>
          <p>Your continued use of the site after any changes indicates your acceptance of the new Privacy Policy.</p>
          <h4 className="font-bold">Contact us:</h4>
          <p>If you have any questions about this Privacy Policy, please contact us at </p>
          <p><a href="mailto:privacy@vellmagazine.com" target='_blank' className="text-blue-700">privacy@vellmagazine.com</a>.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
