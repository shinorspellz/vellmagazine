import PrivacyNavbar from "./PrivacyNavbar";
import Footer from "./Footer";
import { useEffect } from "react";

const CookiesPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  return (
    <>
      <PrivacyNavbar />
      <div className="custom-container privacy-policy w-full max-w-[1040px] m-auto px-2 mt-[70px] sm:pt-5">
        <p className="heading  text-center font-serif text-5xl py-5">
          COOKIES POLICY
        </p>
        <div className="rich-text-block w-richtext pb-12">
          <h3>Vell Magazine Cookies Policy</h3>
          <p>
            TVell Magazine uses cookies and similar technologies to provide you
            with a personalized experience and to understand how our website is
            used. This Cookies Policy explains what cookies are, how we use
            them, and your options for controlling their use.
          </p>
          <h3>What are cookies?</h3>
          <p>
            Cookies are small text files that are stored on your device by a
            website. They are used to remember your preferences, to track your
            usage, and to personalize your experience.
          </p>
          <h4 className="font-bold">How we use cookies:</h4>
          <p>To remember your preferences, such as language and font size, so that you don’t have to set them every time you visit our site.</p>
          <p>To track your usage, such as which pages you visit and how long you spend on the site, so that we can improve our products and services.</p>
          <p>To personalize your experience, such as showing you recommendations based on your purchase history and interests.</p>
          <h4 className="font-bold">Types of cookies:</h4>
          <p>Session cookies are temporary files that are deleted when you close your browser. They are used to remember your preferences during a single session.</p>
          <p>Persistent cookies are files that remain on your device even after you close your browser. They are used to remember your preferences for future visits.</p>
          <p>Third-party cookies are set by third-party services, such as social media widgets or analytics tools, that are used on our site.</p>
          <h4 className="font-bold">Controlling cookies:</h4>
          <p>You can control the use of cookies through your browser settings.</p>
          <p>Most browsers offer the option to block or delete cookies, but this may affect the functionality of our site and other sites that you visit.</p>
          <p>Changes to this Policy:</p>
          <p>We may update this Cookies Policy from time to time to reflect changes in our practices or applicable laws.</p>
          <p>Your continued use of the site after any changes indicates your acceptance of the new Cookies Policy.</p>
          <h4 className="font-bold">Contact us:</h4>
          <p>If you have any questions about this Cookies Policy, please contact us at </p>
          <p><a href="mailto:privacy@vellmagazine.com" target='_blank' className="text-blue-700">privacy@vellmagazine.com</a>.</p>
        </div>
      </div>
<Footer/>
    </>
  );
};

export default CookiesPolicy;
