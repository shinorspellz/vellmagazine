import { BrowserRouter, Routes, Route } from "react-router-dom";
import VellMagazine from "../pages/VellMagazine/VellMagazine";
import Subscribe from "../pages/VellMagazine/Subscribe";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermOfUse from "../components/TermOfUse";
import ArticlesHeader from "../components/Articles/ArticlesHeader";
import AuthorTemplate from "../components/Articles/AuthorTemplate";
import ArticleTopics from "../components/Articles/ArticleTopics";
// import ArticleTemplate from "../components/Articles/ArticleTemplate";
import ArticleTemplateOne from "../components/Articles/ArticleTemplateOne";
import ArticleTemplateTwo from "../components/Articles/ArticleTemplateTwo";
import ArticleTemplateThree from "../components/Articles/ArticleTemplateThree";
import ArticleTemplateFour from "../components/Articles/ArticleTemplateFour";
import ArticleTemplateFive from "../components/Articles/ArticleTemplateFive";
import ArticleTemplateSix from "../components/Articles/ArticleTemplateSix";
import CookiesPolicy from "../components/CookiesPolicy";
import Authors from "../components/Articles/Authors";
import ThisMonthArticles from "../components/Articles/ThisMonthArticles";
import AboutUs from "../components/AboutUs";
import SearchedView from "../components/Articles/SearchedView";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VellMagazine />} />
        <Route path="/this-month-articles" element={<ThisMonthArticles />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="termofuse" element={<TermOfUse />} />
        <Route path="cookiespolicy" element={<CookiesPolicy />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="allarticles" element={<ArticlesHeader />} />
        <Route path="/article/:id/1" element={<ArticleTemplateOne />} />
        <Route path="/article/:id/2" element={<ArticleTemplateTwo />} />
        <Route path="/article/:id/3" element={<ArticleTemplateThree />} />
        <Route path="/article/:id/4" element={<ArticleTemplateFour />} />
        <Route path="/article/:id/5" element={<ArticleTemplateFive />} />
        <Route path="/article/:id/6" element={<ArticleTemplateSix />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/author/:author" element={<AuthorTemplate />} />
        <Route path="/articletopics" element={<ArticleTopics />} />
        <Route path="/searched-articles" element={<SearchedView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
