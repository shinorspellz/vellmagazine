import React, { useContext } from "react";
import VellNavbar from "../VellMagazine/VellNavbar";
import { articles } from "../../utils/vellMagazineData";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import Footer from "../Footer";

import { menuItems } from "../../utils/menuItems";
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
  TwitterIcon,
} from "react-share";
import { VellMagazineContext } from "../../context/VellMagazineContext";
import { useEffect } from "react";
import RecommendedArticles from "./RecommendedArticles";
import Slider from "react-slick";
import MoreLikeThisTemplate from "./MoreLikeThisTemplate";

// import { useEffect } from 'react'

const ArticleTemplateSeven = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const currentArticle = articles.find((item) => item.id == id);
  const currentArticleTopics = currentArticle.topics;
  const arr = [];
  currentArticleTopics.map((item) => {
    // console.log(item,"item");
    return articles.filter(
      (item2) => item2.topics.includes(item) && arr.push(item2)
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relevantArticles = arr
    .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i)
    .filter((item) => item.id !== currentArticle.id);

  const recommendedArticles = articles.filter(
    (item) => item.theme == "trending" && item.id != currentArticle.id
  );

  const breadcrump = menuItems.find((item) => {
    // console.log(item);
    return item.submenu.find((item2) =>
      item2.title.toUpperCase() == currentArticle.topics[0]
        ? currentArticle.topics[0]
        : " "
    );
  });
  // console.log(breadcrump.title)
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      recommendedArticles.length > 4 ? 5 : recommendedArticles.length,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    prevArrow: "",
    nextArrow: "",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow:
            recommendedArticles.length > 3 ? 4 : recommendedArticles.length,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow:
            recommendedArticles.length > 2 ? 3 : recommendedArticles.length,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow:
            recommendedArticles.length > 1 ? 2 : recommendedArticles.length,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <VellNavbar />
      <div className="flex flex-col lg:flex-row items-center justify-evenly pb-6">
        <div className="flex flex-col">
          <img
            src={currentArticle.img}
            alt="img"
            className="max-h-[800px] w-full max-w-[1000px] sm:px-0 object-cover sm:block sm:m-auto my-3  block lg:mt-[123px] mt-[45px]"
          />
          <p className="py-1 text-center text-sm">
            Image source:
            <a href={currentArticle.img_source} target="_blank">
              {currentArticle.img_source_title}
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center lg:mr-[50px] lg:mt-[70px] max-w-[500px] header-article">
          <p className="p-3 text-sm text-center">{currentArticle.topics[0]} </p>
          <h1 className="font-medium font-serif text-[40px] py-2 text-center">
            {currentArticle.contentHeader}
          </h1>
          <h3 className="px-3 font-bold italic text-center">
            {currentArticle.subHeader}
          </h3>
          <p className="px-3 text-[13px] text-center">
            {" "}
            <span
              className="underline px-1 font-semibold cursor-pointer"
              onClick={() =>
                navigate(`/author/${currentArticle.author}`, {
                  state: `${currentArticle.author}`,
                })
              }
            >
              {currentArticle.author}
            </span>{" "}
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

      <div
        className=" px-2 pb-12 articleTemplate w-full max-w-[1350px] m-auto"
        id={currentArticle.contentHeader}
      >
        <main className="flex flex-col lg:flex-row articleTemplate max-w-[1350px] m-auto">
          <div className="w-full max-w-[850px] lg:w-8/12 m-auto lg:pl-5">
            <p
              dangerouslySetInnerHTML={{ __html: currentArticle.content }}
              className="content p-3 text-justify"
            ></p>
            <div className="flex justify-start items-center p-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2 w-5/12 ">
                <p className="font-semibold">Share via</p>
                <div className="flex items-center justify-start gap-2">
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
                Written by{" "}
                <span
                  className="font-bold cursor-pointer"
                  onClick={() =>
                    navigate(`/author/${currentArticle.author}`, {
                      state: `${currentArticle.author}`,
                    })
                  }
                >
                  {currentArticle.author}
                </span>
              </p>
            </div>{" "}
          </div>
          <div className="w-full lg:w-4/12 px-5 mt-3">
            <h3 className="text-2xl text-center sm:text-left sm:pl-[62px] font-serif">
              More like this
            </h3>
            <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-end">
              {relevantArticles.slice(0, 7).map((item) => {
                return <MoreLikeThisTemplate item={item} key={item.id} />;
              })}
            </div>
          </div>
        </main>
      </div>
      {recommendedArticles.length > 1 && (
        <section className="recommendedArticles py-5">
          <h3 className="text-center text-lg sm:text-xl py-4 font-serif">
            RECOMMENDED ARTICLES
          </h3>
          <Slider {...settings} className="container m-auto ">
            {recommendedArticles?.map((item, index) => {
              return (
                <ul className="m-auto" key={item.id}>
                  <li className="list-unstyled mx-2 ">
                    <RecommendedArticles item={item} index={index} />
                  </li>
                </ul>
              );
            })}
          </Slider>
        </section>
      )}
      <Footer />
    </>
  );
};

export default ArticleTemplateSeven;
