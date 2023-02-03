import PrivacyNavbar from './PrivacyNavbar'
import React, { useEffect } from 'react'
import { IoLogoGooglePlaystore,IoLogoApple } from 'react-icons/io5'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok, FaFacebookF } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'



const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  return (
    <>
     <PrivacyNavbar/>
      <div className="custom-container privacy-policy w-full max-w-[1040px] m-auto px-2">
        <h1 className="heading mt-[100px] text-center font-bold text-5xl py-10">
          PRIVACY POLICY
        </h1>
        <div className="rich-text-block w-richtext">
          <p>
            This privacy policy applies between you, the User of this Website,
            and VModel LTD, the owner and provider of this Website. VModel LTD
            takes the privacy of your information very seriously. This privacy
            policy applies to our use of any and all Data collected by us or
            provided by you in relation to your use of the Website.
          </p>
          <p>
            <strong>Please read this privacy policy carefully.</strong>
          </p>
          <h4 className='font-extrabold'>Definitions and interpretation</h4>
          <p>1. In this privacy policy, the following definitions are used:</p>
          <h4 className='font-bold'>Data</h4>
          <p>
            {' '}
            Collectively all information that you submit to VModel LTD via the
            Website. This definition incorporates, where applicable, the
            definitions provided in the Data Protection Laws;
          </p>
          <h4 className='font-bold'>Cookies</h4>
          <p>
            A small text file placed on your computer by this Website when you
            visit certain parts of the Website and/or when you use certain
            features of the Website. Details of the cookies used by this Website
            are set out in the clause below (Cookies);
          </p>
          <h4>Data Protection Laws</h4>
          <p>
            Any applicable law relating to the processing of personal Data,
            including but not limited to the GDPR, and any national implementing
            and supplementary laws, regulations and secondary legislation;
          </p>
          <h4>GDPR</h4>
          <p>The UK General Data Protection Regulation;</p>
          <h4>VModel LTD,we or us</h4>
          <p>
            VModel LTD, a company incorporated in England and Wales with
            registered number 14094842 whose registered office is at 216 Chorley
            Old Road, Manchester, BL1 3BG;
          </p>
          <h4>UK and EU Cookie Law</h4>
          <p>
            The Privacy and Electronic Communications (EC Directive) Regulations
            2003 as amended by the Privacy and Electronic Communications (EC
            Directive) (Amendment) Regulations 2011 &amp; the Privacy and
            Electronic Communications (EC Directive) (Amendment) Regulations
            2018;
          </p>
          <h4>User or you</h4>
          <p>
            Any third party that accesses the Website and is not either (i)
            employed by VModel LTD and acting in the course of their employment
            or (ii) engaged as a consultant or otherwise providing services to
            VModel LTD and accessing the Website in connection with the
            provision of such services; and;
          </p>
          <h4>Website</h4>
          <p>
            The website that you are currently using, https://vmodel.app, and
            any sub-domains of this site unless expressly excluded by their own
            terms and conditions.
          </p>
          <p>
            2. In this privacy policy, unless the context requires a different
            interpretation:
          </p>
          <ol start="" role="list" className="list-decimal list-inside">
            <li>The singular includes the plural and vice versa;</li>
            <li>
              References to sub-clauses, clauses, schedules or appendices are to
              sub-clauses, clauses, schedules or appendices of this privacy
              policy;
            </li>
            <li>
              A reference to a person includes firms, companies, government
              entities, trusts and partnerships;
            </li>
            <li>
              "including" is understood to mean "including without limitation";
            </li>
            <li>
              Reference to any statutory provision includes any modification or
              amendment of it;
            </li>
            <li>
              The headings and sub-headings do not form part of this privacy
              policy.
            </li>
          </ol>
          <h3>Scope of this privacy policy</h3>
          <p>
            3. This privacy policy applies only to the actions of VModel LTD and
            Users with respect to this Website. It does not extend to any
            websites that can be accessed from this Website including, but not
            limited to, any links we may provide to social media websites.
          </p>
          <p>
            4. For purposes of the applicable Data Protection Laws, VModel LTD
            is the "data controller". This means that VModel LTD determines the
            purposes for which, and the manner in which, your Data is processed.
          </p>
          <h3>Data collected</h3>
          <p>
            5. We may collect the following Data, which includes personal Data,
            from you:
          </p>
          <ol start="" role="list" className="list-decimal list-inside">
            <li>name;</li>
            <li>date of birth;</li>
            <li>gender;</li>
            <li>job title;</li>
            <li>
              contact Information such as email addresses and telephone numbers;
            </li>
            <li>
              demographic information such as postcode, preferences and
              interests;
            </li>
            <li>financial information such as credit / debit card numbers;</li>
            <li>IP address (automatically collected);</li>
            <li>web browser type and version (automatically collected);</li>
          </ol>
          <p>in each case, in accordance with this privacy policy.</p>
          <h3>How we collect Data</h3>
          <p>6. We collect Data in the following ways:</p>
          <ul role="list" className="list-decimal list-inside">
            <li>data is given to us by you; </li>
            <li>and data is collected automatically.</li>
          </ul>
          <h3>Data that is given to us by you</h3>
          <p>
            7. VModel LTD will collect your Data in a number of ways, for
            example:
          </p>
          <ul role="list" className="list-decimal list-inside">
            <li>
              when you contact us through the Website, by telephone, post,
              e-mail or through any other means;
            </li>
            <li>
              when you register with us and set up an account to receive our
              products/services;
            </li>
            <li>
              when you make payments to us, through this Website or otherwise;
            </li>
            <li>when you use our services;</li>
          </ul>
          <p>in each case, in accordance with this privacy policy.</p>
          <h3>Data that is collected automatically</h3>
          <p>
            8. To the extent that you access the Website, we will collect your
            Data automatically, for example:
          </p>
          <ul role="list" className="list-disc list-inside">
            <li>
              we automatically collect some information about your visit to the
              Website. This information helps us to make improvements to Website
              content and navigation, and includes your IP address, the date,
              times and frequency with which you access the Website and the way
              you use and interact with its content.
            </li>
            <li>
              We will collect your Data automatically via cookies, in line with
              the cookie settings on your browser. For more information about
              cookies, and how we use them on the Website, see the section
              below, headed "Cookies".
            </li>
          </ul>
          <h3>Our use of Data</h3>
          <p>
            9. Any or all of the above Data may be required by us from time to
            time in order to provide you with the best possible service and
            experience when using our Website. Specifically, Data may be used by
            us for the following reasons:
          </p>
          <ul role="list" className="list-disc list-inside">
            <li>internal record keeping;</li>
            <li>improvement of our products / services;</li>
            <li>
              transmission by email of marketing materials that may be of
              interest to you;
            </li>
            <li>
              contact for market research purposes which may be done using
              email, telephone, fax or mail. Such information may be used to
              customise or update the Website;
            </li>
          </ul>
          <p>in each case, in accordance with this privacy policy</p>
          <p>
            10. We may use your Data for the above purposes if we deem it
            necessary to do so for our legitimate interests. If you are not
            satisfied with this, you have the right to object in certain
            circumstances (see the section headed "Your rights "below).
          </p>
          <p>
            11. For the delivery of direct marketing to you via e-mail, we'll
            need your consent, whether via an opt-in or soft-opt-in: soft opt-in
            consent is a specific type of consent which applies when you have
            previously engaged with us (for example, you contact us to ask us
            for more details about a particular product/service, and we are
            marketing similar products/services). Under "soft opt-in" consent,
            we will take your consent as given unless you opt-out. for other
            types of e-marketing, we are required to obtain your explicit
            consent; that is, you need to take positive and affirmative action
            when consenting by, for example, checking a tick box that we'll
            provide. if you are not satisfied with our approach to marketing,
            you have the right to withdraw consent at any time. To find out how
            to withdraw your consent, see the section headed "Your rights"
            below.
          </p>
          <p>
            12. When you register with us and set up an account to receive our
            services, the legal basis for this processing is the performance of
            a contract between you and us and/or taking steps, at your request,
            to enter into such a contract.
          </p>
          <p>
            13. We may use your Data to show you VModel LTD adverts and other
            content on other websites. If you do not want us to use your data to
            show you VModel LTD adverts and other content on other websites,
            please turn off the relevant cookies (please refer to the section
            headed "Cookies" below).
          </p>
          <h3>Who we share Data with</h3>
          <p>
            14. We may share your Data with the following groups of people for
            the following reasons:
          </p>
          <ul role="list" className="list-disc list-inside">
            <li>our employees, agents and/or professional advisors - ;</li>
            <li>relevant authorities - ;</li>
          </ul>
          <p>in each case, in accordance with this privacy policy.</p>
          <h3>Keeping Data secure</h3>
          <p>
            15. We will use technical and organisational measures to safeguard
            your Data, for example:
          </p>
          <ul role="list" className="list-disc list-inside">
            <li>
              access to your account is controlled by a password and a user name
              that is unique to you.
            </li>
            <li>we store your Data on secure servers.</li>
            <li>
              payment details are encrypted using SSL technology (typically you
              will see a lock icon or green address bar (or both) in your
              browser when we use this technology.
            </li>
          </ul>
          <p>
            16. Technical and organisational measures include measures to deal
            with any suspected data breach. If you suspect any misuse or loss or
            unauthorised access to your Data, please let us know immediately by
            contacting us via this e-mail address:{' '}
            <a href="http://info@vmodel.app">info@vmodel.app</a>
          </p>
          <p>
            17. If you want detailed information from Get Safe Online on how to
            protect your information and your computers and devices against
            fraud, identity theft, viruses and many other online problems,
            please visit www.getsafeonline.org. Get Safe Online is supported by
            HM Government and leading businesses.
          </p>
          <h3>Data retention</h3>
          <p>
            18. Unless a longer retention period is required or permitted by
            law, we will only hold your Data on our systems for the period
            necessary to fulfil the purposes outlined in this privacy policy or
            until you request that the Data be deleted.
          </p>
          <p>
            19. Even if we delete your Data, it may persist on backup or
            archival media for legal, tax or regulatory purposes.
          </p>
          <h3>Your rights</h3>
          <p>20. You have the following rights in relation to your Data:</p>
          <ul role="list" className="list-disc list-inside">
            <li>
              Right to access - the right to request (i) copies of the
              information we hold about you at any time, or (ii) that we modify,
              update or delete such information. If we provide you with access
              to the information we hold about you, we will not charge you for
              this, unless your request is "manifestly unfounded or excessive."
              Where we are legally permitted to do so, we may refuse your
              request. If we refuse your request, we will tell you the reasons
              why.
            </li>
            <li>
              Right to correct - the right to have your Data rectified if it is
              inaccurate or incomplete.
            </li>
            <li>
              Right to erase - the right to request that we delete or remove
              your Data from our systems.
            </li>
            <li>
              Right to restrict our use of your Data - the right to "block" us
              from using your Data or limit the way in which we can use it.
            </li>
            <li>
              Right to data portability - the right to request that we move,
              copy or transfer your Data.
            </li>
            <li>
              Right to object - the right to object to our use of your Data
              including where we use it for our legitimate interests.
            </li>
          </ul>
          <p>
            21. To make enquiries, exercise any of your rights set out above, or
            withdraw your consent to the processing of your Data(where consent
            is our legal basis for processing your Data), please contact us via
            this e-mail address: info@vmodel.app.
          </p>
          <p>
            22. If you are not satisfied with the way a complaint you make in
            relation to your Data is handled by us, you may be able to refer
            your complaint to the relevant data protection authority. For the
            UK, this is the Information Commissioner's Office (ICO). The ICO's
            contact details can be found on their website at
            https://ico.org.uk/.
          </p>
          <p>
            23. It is important that the Data we hold about you is accurate and
            current. Please keep us informed if your Data changes during the
            period for which we hold it.
          </p>
          <h3>Links to other websites</h3>
          <p>
            24. This Website may, from time to time, provide links to other
            websites. We have no control over such websites and arenot
            responsible for the content of these websites. This privacy policy
            does not extend to your use of such websites. Youare advised to read
            the privacy policy or statement of other websites prior to using
            them.
          </p>
          <h3>Changes of business ownership and control</h3>
          <p>
            25. VModel LTD may, from time to time, expand or reduce our business
            and this may involve the sale and/or the transfer of control of all
            or part of VModel LTD. Data provided by Users will, where it is
            relevant to any part of our business so transferred, be transferred
            along with that part and the new owner or newly controlling party
            will, under the terms of this privacy policy, be permitted to use
            the Data for the purposes for which it was originally supplied to
            us.
          </p>
          <p>
            26. We may also disclose Data to a prospective purchaser of our
            business or any part of it.
          </p>
          <p>
            27. In the above instances, we will take steps with the aim of
            ensuring your privacy is protected.
          </p>
          <h3>Cookies</h3>
          <p>
            28. This Website may place and access certain Cookies on your
            computer. VModel LTD uses Cookies to improve your experience of
            using the Website and to improve our range of products and services.
            VModel LTD has carefully chosen these Cookies and has taken steps to
            ensure that your privacy is protected and respected at all times.
          </p>
          <p>
            29. All Cookies used by this Website are used in accordance with
            current UK and EU Cookie Law.
          </p>
          <p>
            30. Before the Website places Cookies on your computer, you will be
            presented with a message bar requesting your consent to set those
            Cookies. By giving your consent to the placing of Cookies, you are
            enabling VModel LTD to provide a better experience and service to
            you. You may, if you wish, deny consent to the placing of Cookies;
            however certain features of the Website may not function fully or as
            intended.
          </p>
          <h3>Cookies and their Purposes</h3>
          <p>31. This Website may place the following Cookies</p>
          <h4>Strictly necessary cookies</h4>
          <p>
            These are cookies that are required for the operation of our
            website. They include, for example, cookies that enable you to log
            into secure areas of our website, use a shopping cart or make use of
            e-billing services
          </p>
          <h4>Analytical/performance cookies</h4>
          <p>
            They allow us to recognise and count the number of visitors and to
            see how visitors move around our website when they are using it.
            This helps us to improve the way our website works, for example, by
            ensuring that users are finding what they are looking for easily.
          </p>
          <h4>Functionality cookies</h4>
          <p>
            These are used to recognise you when you return to our website. This
            enables us to personalise our content for you, greet you by name and
            remember your preferences(for example, your choice of language or
            region). By using the Website, you agree to our placement of
            functionality cookie.
          </p>
          <h4>Targeting cookies</h4>
          <p>
            These cookies record your visit to our website, the pages you have
            visited and the links you have followed. We will use this
            information to make our website and the advertising displayed on it
            more relevant to your interests. We may also share this information
            with third parties for this purpose.
          </p>
          <p>
            32. You can find a list of Cookies that we use in the Cookies
            Schedule.
          </p>
          <p>
            33. You can choose to enable or disable Cookies in your internet
            browser. By default, most internet browsers accept Cookies but this
            can be changed. For further details, please see the help menu in
            your internet browser. You can switch off Cookies at any time,
            however, you may lose any information that enables you to access the
            Website more quickly and efficiently.
          </p>
          <p>
            34. You can choose to delete Cookies at any time; however, you may
            lose any information that enables you to access the Website more
            quickly and efficiently including, but not limited to,
            personalisation settings.
          </p>
          <p>
            35. It is recommended that you ensure that your internet browser is
            up-to-date and that you consult the help and guidance provided by
            the developer of your internet browser if you are unsure about
            adjusting your privacy settings.
          </p>
          <p>
            36. For more information generally on cookies, including how to
            disable them, please refer to aboutcookies.org. You will also find
            details on how to delete cookies from your computer.
          </p>
          <h3>General</h3>
          <p>
            37. You may not transfer any of your rights under this privacy
            policy to any other person. We may transfer our rights under this
            privacy policy where we reasonably believe your rights will not be
            affected.
          </p>
          <p>
            38. If any court or competent authority finds that any provision of
            this privacy policy (or part of any provision) is invalid, illegal
            or unenforceable, that provision or part-provision will, to the
            extent required, be deemed to be deleted, and the validity and
            enforceability of the other provisions of this privacy policy will
            not be affected.
          </p>
          <p>
            39. Unless otherwise agreed, no delay, act or omission by a party in
            exercising any right or remedy will be deemed a waiver of that, or
            any other, right or remedy.
          </p>
          <p>
            40. This Agreement will be governed by and interpreted according to
            the law of England and Wales. All disputes arising under the
            Agreement will be subject to the exclusive jurisdiction of the
            English and Welsh courts.
          </p>
          <h3>Changes to this privacy policy</h3>
          <p>
            41. VModel LTD reserves the right to change this privacy policy as
            we may deem necessary from time to time or as maybe required by law.
            Any changes will be immediately posted on the Website and you are
            deemed to have accepted theterms of the privacy policy on your first
            use of the Website following the alterations.{' '}
          </p>
          <p>
            You may contact VModel LTD by email at{' '}
            <a
              href="mailto:http://info@vmodel.app"
              target="_blank"
              className="font-bold text-[503c3b]"
            >
              info@vmodel.app.
            </a>
          </p>
          <p>‍</p>
        </div>
      </div>
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
        <img src="./images/sign-person.png" alt="privacypolicy" className='absolute bottom-0 right-0 lg:h-[500px] hidden md:block object-cover' />
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
        <NavLink>
          Vell Magazine
        </NavLink>
      </div>    </>
  )
}

export default PrivacyPolicy
