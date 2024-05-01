import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useLayoutEffect, useState } from "react";
import { tokenChecker, adminChecker } from "../utils/checker";
import axios from "axios";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!tokenChecker()) return;
    setAuthenticated(true);
    if (adminChecker()) setIsAdmin(true);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleLogout = async () => {
    const token = tokenChecker();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/logout",
        { token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        console.log(data.status);
        localStorage.clear();
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img src={brainwave} className="w-1/2" alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            <Link
              to="/"
              onClick={handleClick}
              className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={handleClick}
              className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
            >
              Services
            </Link>

            <Link
              to="/blog"
              onClick={handleClick}
              className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
            >
              blog
            </Link>
            {isAdmin && (
              <Link
                to="/statistics"
                onClick={handleClick}
                className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
              >
                statistics
              </Link>
            )}
          </div>

          <HamburgerMenu />
        </nav>

        {!authenticated && (
          <>
            <Link
              to="/register"
              className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
            >
              New account
            </Link>

            <Button className="hidden lg:flex" href="/login">
              Sign in
            </Button>
          </>
        )}

        {authenticated && (
          <Button className="hidden lg:flex" onClick={handleLogout}>
            Sign out
          </Button>
        )}

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
