import React, { useState } from "react";
import { articles } from "../../utils/vellMagazineData";
import ArticleMainHeader from "./ArticleMainHeader";

const SearchedArticles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const results = articles.filter((item) =>
      item.mainHeader.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="  border-b text-center w-3/4 lg:w-1/2   border-gray-400 focus:ring-1 focus:border-gray-600 focus:ring-gray-500 rounded-2xl "
          placeholder="Search for articles ..."
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      {searchResults.length > 0 ? (
        <div className=" grid gap-x-8 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-9 m-auto py-5 justify-center max-w-[1400px] gap-y-5">
          {searchResults.map((article, index) => (
            <div key={index} className="flex justify-center items-center">
              <ArticleMainHeader item={article} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-[80px] h-[calc(100vh-350px)] flex justify-center items-center font-bold empty-page">
          {searchTerm && "Article not found"}
        </p>
      )}
    </>
  );
};
export default SearchedArticles;
