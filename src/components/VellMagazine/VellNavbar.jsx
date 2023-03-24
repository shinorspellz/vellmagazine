import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { menuItems } from "../../utils/menuItems";
import MenuItems from "./MenuItems";
import { useContext } from "react";
import { VellMagazineContext } from "../../context/VellMagazineContext";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const VellNavbar = () => {
  const { theme, changeTheme } = useContext(VellMagazineContext);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate("/allarticles", { state: e.target.value });
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 pt-2 pl-2 sm:pl-0 sm:px-5 text-[17px] lg:border-b border-slate-400"
      id="vellnavbar"
    >
      <section className="flex justify-between  items-center sm:mb-[1.8rem]">
        <div className="flex justify-start lg:justify-center items-center  w-full translate-x-[60px]">
          <NavLink
            to="/"
            className="font-serif text-[25px] whitespace-nowrap  h-full flex items-center justify-start translate-x-[-45px] lg:translate-x-0"
          >
            Vell Magazine
          </NavLink>
          <p className="px-1 text-sm hidden lg:block">by</p>
          <NavLink
            to="https://vmodel.app/"
            className="font-serif text-[24px] whitespace-nowrap hidden lg:block"
          >
            <img
              src={
                theme === "light-theme"
                  ? "/images/Logo.jpg"
                  : "/images/logoForDarkMode.png"
              }
              alt="logo"
              className="w-[80px] pt-1 "
            />
          </NavLink>
        </div>

        <div className="text-sm  flex justify-between items-center gap-4 authors h-full px-2  relative z-10">
          {/* <Link
            to="/subscribe"
            className=" items-center justify-center h-full hidden lg:flex align-middle"
          >
            SUBSCRIBE
          </Link> */}
          {/* <Link
            to=""
            className="hidden lg:flex items-center justify-center h-full align-middle"
          >
            SIGN IN
          </Link> */}
          <Link to="/searched-articles">
            <BiSearch className="w-[24px] h-[24px]" />
          </Link>
          <button
            className="navbar-switch flex items-center justify-center text-[20px] lg:hidden"
            onClick={changeTheme}
          >
            {theme === "light-theme" ? (
              <BiMoon />
            ) : (
              <BiSun className="text-yellow-400" />
            )}
          </button>
          {!isShow ? (
            <FaBars
              className="text-2xl faBars lg:hidden flex items-center justify-center h-full"
              onClick={() => setIsShow(true)}
            />
          ) : (
            <RxCross1
              className="text-2xl faBars lg:hidden flex items-center justify-center h-full "
              onClick={() => setIsShow(false)}
            />
          )}
          <button
            className="navbar-switch lg:flex items-center justify-center text-2xl hidden"
            onClick={changeTheme}
          >
            {theme === "light-theme" ? (
              <BiMoon />
            ) : (
              <BiSun className="text-yellow-400" />
            )}
          </button>
        </div>
      </section>
      <section className=" items-center justify-center px-4 lg:flex ">
        {/* <label for="cars">Choose a date</label> */}
        <select
          name="dates"
          id="dates"
          className="border-0 text-sm bg-transparent font-[900] focus-within:ring-0 cursor-pointer hidden lg:block "
          onChange={(e) => handleChange(e)}
          defaultValue={"DEFAULT"}
        >
          <option
            value="DEFAULT"
            disabled
            hidden
            className="py-2 font-bold cursor-pointer  "
          >
            ARCHIVE
          </option>
          <option
            value="DEC 2022 EDITION"
            className="py-2 font-black cursor-pointer"
          >
            DEC 2022
          </option>
          <option
            value="JAN 2023 EDITION"
            className="py-2 font-black cursor-pointer "
          >
            JAN 2023
          </option>
          <option
            value="FEB 2023 EDITION"
            className="py-2 font-black cursor-pointer "
          >
            FEB 2023
          </option>
          <option
            value="MAR 2023 EDITION"
            className="py-2 font-black cursor-pointer "
          >
            MAR 2023
          </option>
        </select>
        <ul className="lg:grid grid-flow-col-dense gap-[2.7rem] ml-[2.2rem] hidden bg-transparent">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      </section>
      <Sidebar setIsShow={setIsShow} isShow={isShow} />
    </nav>
  );
};

export default VellNavbar;
