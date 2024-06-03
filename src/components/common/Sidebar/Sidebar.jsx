import { useCallback, useEffect, useState } from "react";
import { CiHome, CiLogout } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { useGetStaff } from "../../../hooks/query/useGet";
import { SlClose } from "react-icons/sl";
import EmployeeNav from "./EmployeeNav";
import HrNav from "./HrNav";
import AdminNav from "./AdminNav";
import CommonSpinner from "../Spinner/CommonSpinner";

const Sidebar = () => {
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

  const { signOutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { staff, staffIsLoading } = useGetStaff();

  //Sign Out
  const signOut = async () => {
    try {
      await signOutUser();
      toast.success("Sign Out Successful.", {
        style: {
          border: "2px solid #866674",
          padding: "16px",
          color: "#F5F5F5",
          background: "#502D3C",
        },
        iconTheme: {
          primary: "#fdb71c",
          secondary: "#F5F5F5",
        },
      });
      navigate("/");
    } catch {
      toast.error("Failed, Try Again.", {
        style: {
          border: "2px solid #866674",
          padding: "16px",
          color: "#F5F5F5",
          background: "#502D3C",
        },
        iconTheme: {
          primary: "#CD2728",
          secondary: "#F5F5F5",
        },
      });
    }
  };

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-primary flex justify-between lg:hidden">
        <div>
          <div className="block cursor-pointer p-4">
            <Link to="/" className="flex justify-center items-center gap-2">
              <img
                src="https://i.postimg.cc/8PXkRHGy/work-sync.png"
                alt="WorkSync"
                className="size-8 object-cover"
              />
              <h1 className="text-common text-2xl font-bold">WorkSync</h1>
            </Link>
          </div>
        </div>

        <button onClick={handleToggle} className="p-4 bg-secondary">
          {isOpen ? (
            <SlClose className="text-common size-6" />
          ) : (
            <AiOutlineMenu className="text-common size-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 lg:fixed flex flex-col justify-between overflow-x-hidden bg-primary w-64 space-y-6 absolute inset-y-0 left-0 transform ${
          !isOpen && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Logo  */}
          <div className="w-full flex py-4 justify-center items-center mx-auto border-b border-secondary">
            <Link to="/" className="flex justify-center items-center gap-2">
              <img
                src="https://i.postimg.cc/8PXkRHGy/work-sync.png"
                alt="WorkSync"
                className="size-8 object-cover"
              />
              <h1 className="text-common text-2xl font-bold">WorkSync</h1>
            </Link>
          </div>

          {/* Sidebar NavLink */}
          <div className="flex flex-col justify-between flex-1">
            {staffIsLoading ? (
              <CommonSpinner />
            ) : (
              (staff?.role === "Employee" && <EmployeeNav />) ||
              (staff?.role === "HR" && <HrNav />) ||
              (staff?.role === "Admin" && <AdminNav />)
            )}
          </div>
        </div>

        <div className="border-t border-secondary">
          {/* Home  */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center px-4 py-2 my-3  transition-colors duration-300 transform  hover:bg-secondary hover:text-common text-primaryBg w-full"
          >
            <CiHome className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </button>

          {/* Sign Out  */}
          <button
            onClick={signOut}
            className="flex items-center px-4 py-2 my-3  transition-colors duration-300 transform  hover:bg-secondary hover:text-common text-primaryBg w-full"
          >
            <CiLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Sign Out</span>
          </button>

          {/* Theme Switcher  */}
          <div className="duration-100 flex items-center gap-4 px-4 py-2 my-3 rounded text-common">
            {options?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`size-5 leading-9 text-xl rounded-full hover:text-secondary dark:hover:text-secondary ${
                  theme === opt.text && "text-secondary"
                }`}
              >
                <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
