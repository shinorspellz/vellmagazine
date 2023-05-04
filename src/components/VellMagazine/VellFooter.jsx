import { footerData } from "../../utils/vellMagazineData";
import { Link } from "react-router-dom";
import SingleFooterImg from "./SingleFooterImg";
import { useContext } from "react";
import { VellMagazineContext } from "../../context/VellMagazineContext";

const VellFooter = () => {
  const { theme } = useContext(VellMagazineContext);

  return (
    <main className=" vellmagazine-footer max-w-full">
      <div className="flex flex-col justify-center items-center  m-auto h-[250px] gap-[1rem] ">
        <div className="flex md:mr-[33.5rem]">
          {theme === "light-theme" ? (
            <img
              src="/images/Logo.jpg"
              alt="logo"
              className="w-[160px] h-[36px]"
            />
          ) : (
            <img
              src="/images/logoForDarkMode.png"
              alt="logo"
              className="w-[160px] h-[36px]"
            />
          )}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full mt-3 gap-5 md:gap-[10rem] ">
          <h1 className="font-500 font-serif text-[25px] max-w-[300px] md:max-w-[385px] ">
            Take control of your creative future, sign up today!
          </h1>
          <button className="w-[150px] my-2 visitBtn">
            <Link to="https://vmodel.app/">Visit Website</Link>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-16 ">
        {footerData?.map((item, index) => {
          return <SingleFooterImg key={index} item={item} />;
        })}
      </div>
    </main>
  );
};

export default VellFooter;
