import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArticleMainHeader = ({ item }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-[160px] h-[200px] sm:w-[247px] sm:h-[365px] cursor-pointer relative rounded-lg "
      onMouseOver={() => setShow(false)}
      onMouseOut={() => setShow(true)}
    >
      <img
        src={item.img}
        alt="article_image"
        className="absolute left-0 top-0 h-full object-cover -z-10 rounded-lg "
      />
      <div
        className={`${
          !show
            ? "block absolute left-0 top-0 w-full h-full text-center sm:text-2xl font-bold  sm:pt-3 px-1 bg-white/60 "
            : "hidden"
        } `}
        onClick={() => navigate(`/article/${item.id}/${item.template}`)}
      >
        {item?.mainHeader.length > 60 ? (
          <>
            <h4
              className={`${
                show && "hidden"
              }  sm:pt-5 articleMainHeader sm:hidden`}
            >
              {item.mainHeader.slice(0, 60)}...
            </h4>
            <h4
              className={`${
                show && "hidden"
              }  sm:pt-5 articleMainHeader hidden sm:block `}
            >
              {item.mainHeader.slice(0, 90)}...
            </h4>
          </>
        ) : (
          <h4
            className={`${
              show && "hidden"
            }   sm:pt-5 articleMainHeader `}
          >
            {item.mainHeader}
          </h4>
        )}
        <h3
          className={`${
            show && "hidden"
          } absolute bottom-0 sm:bottom-2 left-[50%] translate-x-[-50%]  w-full text-xl sm:text-3xl  readmore`}
        >
          {" "}
          Read More...
        </h3>
      </div>
    </div>
  );
};

export default ArticleMainHeader;
