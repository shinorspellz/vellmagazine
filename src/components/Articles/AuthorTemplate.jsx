import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { articles, authorsData } from "../../utils/vellMagazineData";
import VellNavbar from "../VellMagazine/VellNavbar";
import ArticleMainHeader from "./ArticleMainHeader";
import Footer from "../Footer";

import { VellMagazineContext } from "../../context/VellMagazineContext";

const AuthorTemplate = () => {
  const { state } = useLocation();
  const {scrollToTop}=useContext(VellMagazineContext)
  const newArticleList = articles.filter((item) => item.author === state);
  const currentAuthor = authorsData.find((item) => item.name === state);

  console.log(currentAuthor);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VellNavbar />

      <div className="mt-[70px] lg:mt-[145px] py-3 authorTemplate">
        <img
          src={currentAuthor.img}
          alt="author"
          className="block m-auto rounded-full object-cover w-[300px] h-[300px] authorPic"
        />
        <h3 className="text-center font-[14px] font-serif" >{currentAuthor.name}</h3>
        <p className="text-center max-w-[800px] font-[13px] m-auto">{currentAuthor.desc}</p>
        <p className="text-center max-w-[800px] font-[13px] m-auto">{currentAuthor.bio}</p>
      </div>

      {/* <div className='mt-[120px] px-9 flex gap-8 justify-start flex-wrap container m-auto py-5'> */}
      <h1 className="pt-7 text-center uppercase font-medium font-serif text-[25px] authorTemplate">
        Articles By {state}
      </h1>
      <div className="mt-[10px] grid gap-x-3 sm:gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-1 sm:px-9 m-auto py-5 justify-center max-w-[1400px]">
        {newArticleList.map((item, index) => {
          return (
            <>
              <ArticleMainHeader item={item} key={index} />
            </>
          );
        })}
      </div>
      <Footer/>
    </>
  );
};

export default AuthorTemplate;
