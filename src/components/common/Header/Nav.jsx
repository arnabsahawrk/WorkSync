import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Container from "../Others/Container";
import { SlClose } from "react-icons/sl";

const Nav = () => {
  const [active, setActive] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  //-----------------Theme------------------
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //Theme Icon
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  //Set default window theme
  const onWindowMatch = useCallback(() => {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkQuery, element]);
  onWindowMatch();

  //Set the theme according to the setting
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
        break;
      default:
        window.localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme, element, onWindowMatch]);

  // Trigger when system theme change
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  //----------------------------

  const navigate = useNavigate();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 w-full py-4 ${
        active ? "bg-common dark:bg-darkPrimary" : "bg-primary"
      }`}
    >
      <Container className="flex flex-row items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.postimg.cc/8PXkRHGy/work-sync.png"
            alt="WorkSync"
            className="size-8 md:size-10 object-cover"
          />
          <h1
            className={`${
              active ? "text-darkPrimary dark:text-common" : "text-common"
            } text-xl md:text-3xl font-bold`}
          >
            WorkSync
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          {/* Dropdown Menu */}
          <div className="relative">
            <div className="flex flex-row items-center gap-2">
              {/* Dropdown btn */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="py-1 px-2 border border-secondary flex flex-row items-center gap-3 rounded-sm cursor-pointer"
              >
                <div className={`${user ? "grid" : "hidden"}`}>
                  {/* Avatar */}
                  <img
                    className="rounded-full object-cover"
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="profile"
                    height="30"
                    width="30"
                  />
                </div>
                {isOpen ? (
                  <SlClose className="text-secondary size-6" />
                ) : (
                  <AiOutlineMenu className="text-secondary size-6" />
                )}
              </div>
            </div>
            {isOpen && (
              <div className="absolute rounded-sm shadow-md w-[200px] bg-common dark:bg-darkPrimary overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    to="/"
                    className="block px-4 py-3 text-darkPrimary dark:text-common hover:text-secondary transition font-semibold"
                  >
                    Home
                  </Link>

                  {user ? (
                    <>
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        to="/dashboard"
                        className="block px-4 py-3 text-darkPrimary dark:text-common hover:text-secondary transition font-semibold"
                      >
                        Dashboard
                      </Link>
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        to="/contact-us"
                        className="px-4 py-3 text-darkPrimary dark:text-common hover:text-secondary transition font-semibold"
                      >
                        Contact Us
                      </Link>
                      <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-4 py-3 text-darkPrimary dark:text-common hover:text-secondary transition font-semibold cursor-pointer"
                      >
                        Sign Out
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => {
                          navigate("/dashboard");
                          setIsOpen(!isOpen);
                        }}
                        className="px-4 py-3 text-[#17171980] dark:text-[#F5F5F580] transition font-semibold cursor-pointer"
                      >
                        Dashboard
                      </div>
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        to="/contact-us"
                        className="px-4 py-3 text-darkPrimary dark:text-common hover:text-secondary transition font-semibold"
                      >
                        Contact Us
                      </Link>
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        to="/sign-in"
                        className="px-4 py-3 text-darkPrimary dark:text-common hover:text-secondary transition font-semibold"
                      >
                        Sign In
                      </Link>
                    </>
                  )}
                  {/* Theme Switcher  */}
                  <div className="duration-100 flex justify-center items-center gap-1 px-2 py-1 rounded text-darkPrimary dark:text-common">
                    {options?.map((opt) => (
                      <button
                        key={opt.text}
                        onClick={() => setTheme(opt.text)}
                        className={`size-8 leading-9 text-xl rounded-full hover:text-secondary dark:hover:text-secondary ${
                          theme === opt.text && "text-secondary"
                        }`}
                      >
                        <ion-icon name={opt.icon}></ion-icon>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
