import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VellMagazineContext } from "../../context/VellMagazineContext";

const SingleTodayMagazine = ({ item, index, thisMonthArr }) => {
  const { changeFormat } = useContext(VellMagazineContext);
  const navigate = useNavigate();
  // const {img,date,content}=item;
  const relevantTopics = [
    "PETS IN THE SPOTLIGHT",
    "INFLUENCERS",
    "FASHION WEEKS",
    "TECHNOLOGY",
    "COST OF LIVING",
    "ARTS & CULTURE"
  ];

  const goToTopics = (e) => {
    navigate(`/articletopics`, { state: e.target.innerText });
  };
  const goToArticle = (e) => {
    let num = e.target.src.indexOf("/images");
    const item = thisMonthArr.find(
      (item) => item.img == e.target.src.slice(num)
    );
    // console.log(item)
    navigate(`/article/${item.id}/${item.template}`);
    // console.log(item.id)
  };

  return (
    <div className="max-w-[440px] flex flex-col">
      <h1
        className="uppercase font-[500] hidden xl:block hover:underline cursor-pointer hover:font-semibold mb-1 text-center "
        onClick={(e) => goToTopics(e)}
      >
        {item.topics[1]}
      </h1>
      <img
        src={item.img}
        alt="single-magazine"
        className="h-[131px] sm:h-[225px] mb-2 cursor-pointer object-cover hover:scale-105"
        onClick={(e) => goToArticle(e)}
      />
      <h3 className="line-clamp-1 p-0 sm:text-center hover:underline cursor-pointer font-serif text-[20px]"
      onClick={()=>navigate(`/article/${item.id}/${item.template}`)}
      >{item.mainHeader}</h3>
      <p className="font-500 text-[18px] xl:py-3 line-clamp-2 xl:line-clamp-none homepageFont">
        {item.content.startsWith("<p")
          ? item.content
              .slice(17, 210)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
              .replace(/<.?i.?[^>]*>/g, '')
              .replace(/<.?em.?[^>]*>/g, '')
              .replace(/<.?[(</p>)]/g, '')
              .replace(/<.?[(</em>)]/g, '')
              .replace(/[>]/g, '')
          : item.content
              .slice(4, 210)
              .replace(/(<p>)/g, '')
              .replace(/<.?p[^>]*>/g, '')
              .replace(/<.?h.?[^>]*>/g, '')
              .replace(/<.?ol.?[^>]*>/g, '')
              .replace(/<.?li.?[^>]*>/g, '')
              .replace(/<.?a.?[^>]*>/g, '')
              .replace(/<.?[(</p>)]/g, '')
              .replace(/<.?i.?[^>]*>/g, '')
              .replace(/<.?em.?[^>]*>/g, '')
              .replace(/<.?[(</p>)]/g, '')
              .replace(/<.?[(</em>)]/g, '')
              .replace(/[>]/g, '')
              }
        ...
      </p>
      <p className="font-400 text-[14px] hidden xl:block text-left ">
        {changeFormat(item.date)}
      </p>
    </div>
  );
};

export default SingleTodayMagazine;
