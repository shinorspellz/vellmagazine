import React from "react";
import VellNavbar from "../VellMagazine/VellNavbar";
import SearchedArticles from "./SearchedArticles";
import Footer from "../Footer";

const SearchedView = () => {
  return (
    <>
      <VellNavbar />
      <h1 className="mt-[120px] uppercase font-serif font-bold text-center py-5 text-xl md:text-3xl articleTopicsHeader">
        Articles
      </h1>
      <SearchedArticles />
      <Footer />
    </>
  );
};

export default SearchedView;
