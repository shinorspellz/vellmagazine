import PrivacyNavbar from "./PrivacyNavbar";
import VellNavbar from "./VellMagazine/VellNavbar";
import Footer from "./Footer";
import { useEffect } from "react";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);
    
  return (
    <div>
        {/* <PrivacyNavbar /> */}
        <VellNavbar/>
        <div className="custom-container privacy-policy w-full max-w-[1040px] m-auto px-2 mt-[90px] sm:py-5 text-justify">
            <p className="heading  text-center font-serif text-5xl py-5">ABOUT US</p>
        <p>Welcome to Vell Magazine, a digital fashion and lifestyle publication that celebrates creativity, diversity, and self-expression. Our team of writers, and editors are passionate about all things fashion, beauty, and culture, and we strive to create content that is both engaging and informative.</p>
        <p className="pt-3">As a digital fashion magazine, Vell strives to be more than just a source of fashion news and trends. We believe in the power of ethical and sustainable fashion practices and aim to promote those principles through our platform. We are committed to featuring and supporting fashion brands that align with our values and share our commitment to ethical practices.</p>
        <p className="pt-3">Furthermore, at Vell magazine, we understand the importance of providing opportunities to writers and creatives who want to be seen and heard. We welcome aspiring and established writers who share our passion for fashion, culture, and lifestyle. Our aim is to create a platform that showcases diverse perspectives and provides a space for talented writers to express themselves and share their unique ideas.</p>
        <p className="pt-3 text-[21px] font-serif font-semibold">"Our goal at Vell Magazine is to provide a platform for diverse voices to be heard, and to spark meaningful conversations around the most pressing issues of our time."</p>
        <p className="pt-3">We are dedicated to providing quality content that informs, entertains, and inspires our readers. Our editorial team is composed of experienced writers, editors, and creatives who work tirelessly to curate content that is not only engaging but also thought-provoking. Whether it's through in-depth features, trend reports, or editorials, we strive to create a compelling and inclusive narrative that reflects the diversity of our audience.</p>
        <p className="pt-3">Ultimately, Vell magazine is more than just a fashion publication. We are a community of like-minded individuals who share a passion for fashion, creativity, and expression. We hope to foster a sense of belonging and provide a space where our readers can come together to celebrate fashion, culture, and life.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs