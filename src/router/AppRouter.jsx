import { BrowserRouter, Routes, Route } from "react-router-dom";
import VellMagazine from "../pages/VellMagazine/VellMagazine";
import Today from "../components/Articles/Today";
import Subscribe from "../pages/VellMagazine/Subscribe";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermOfUse from "../components/TermOfUse";
import ArticlesHeader from "../components/Articles/ArticlesHeader";
import AuthorTemplate from "../components/Articles/AuthorTemplate";
import ArticleTopics from "../components/Articles/ArticleTopics";
import ArticleTemplate from "../components/Articles/ArticleTemplate";
import ArticleTemplateOne from "../components/Articles/ArticleTemplateOne";
import ArticleTemplateTwo from "../components/Articles/ArticleTemplateTwo";
import ArticleTemplateThree from "../components/Articles/ArticleTemplateThree";
import ArticleTemplateFour from "../components/Articles/ArticleTemplateFour";
import ArticleTemplateFive from "../components/Articles/ArticleTemplateFive";
import ArticleTemplateSix from "../components/Articles/ArticleTemplateSix";
import CookiesPolicy from "../components/CookiesPolicy";

const AppRouter = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VellMagazine/>} />
          <Route path="/today" element={<Today/>} />
          <Route path="subscribe" element={<Subscribe/>} />
          <Route path="privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="termofuse" element={<TermOfUse/>} />
          <Route path="cookiespolicy" element={<CookiesPolicy/>} />
          <Route path="allarticles" element={<ArticlesHeader/>} />
          {/* <Route path="/article/:id" element={<ArticleTemplate/>} /> */}
          <Route path="/article/:id/1" element={<ArticleTemplateOne/>} />
          <Route path="/article/:id/2" element={<ArticleTemplateTwo/>} />
          <Route path="/article/:id/3" element={<ArticleTemplateThree/>} />
          <Route path="/article/:id/4" element={<ArticleTemplateFour/>} />
          <Route path="/article/:id/5" element={<ArticleTemplateFive/>} />
          <Route path="/article/:id/6" element={<ArticleTemplateSix/>} />
          <Route path="/author/:author" element={<AuthorTemplate/>} />
          <Route path="/articletopics" element={<ArticleTopics/>} />
        </Routes>
      </BrowserRouter>
  );
};


export default AppRouter;
