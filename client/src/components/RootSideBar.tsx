import { Avatar, Sidebar } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import {
  FaBookOpen,
  FaCircle,
  FaInfoCircle,
  FaPen,
  FaPizzaSlice,
  FaSquare,
  FaStar,
  FaUser,
} from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { closeSideBarContext } from "../contexts/closeSideBar";
import SideBarItem from "../components/SideBarItem";
import { AuthContext } from "../contexts/AuthContext";
import { IUser } from "../@types/types.user";
import { IoCreate } from "react-icons/io5";
import { userUrl } from "../service/url";

const RootSideBar = () => {
  const { isClosed } = useContext(closeSideBarContext);
  const [visibility, setvisibility] = useState("sticky");
  const { user, logout, isLoggedIn, role } = useContext(AuthContext);
  const Iuser: IUser = user;

  useEffect(() => {
    isClosed == true ? setvisibility("hidden") : setvisibility("sticky");
  }, [isClosed]);

  return (
    <Sidebar
      className={`${visibility} h-screen border-gray-200 max-md:fixed max-md:z-40 md:top-5 md:border-r-2 [&>div]:bg-transparent [&>div]:p-0 `}
      aria-label="Sidebar with logo branding example"
    >
      <Sidebar.Logo href="#" img="/assets/images/logo.png" imgAlt="site logo">
        <p>Pizza Master</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-500" : ""
            }
            to={"/"}
          >
            <SideBarItem title="Home">
              <FaPizzaSlice />
            </SideBarItem>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-500" : ""
            }
            to={"/about"}
          >
            <SideBarItem title="About">
              <FaInfoCircle />
            </SideBarItem>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-500" : ""
            }
            to={"/recipes/Dough"}
          >
            <SideBarItem title="Dough">
              <FaCircle />
            </SideBarItem>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-500" : ""
            }
            to={"/recipes/Sauce"}
          >
            <SideBarItem title="Sauce">
              <FaSquare />
            </SideBarItem>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-500" : ""
            }
            to={"/recipes/Toppings"}
          >
            <SideBarItem title="Toppings">
              <BsTriangleFill />
            </SideBarItem>
          </NavLink>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {!isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold text-red-500" : ""
              }
              to={"/login"}
            >
              <SideBarItem title="Log In">
                <HiArrowSmRight />
              </SideBarItem>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold text-red-500" : ""
              }
              to={"/register"}
            >
              <SideBarItem title="Sign Up">
                <FaPen />
              </SideBarItem>
            </NavLink>
          )}
          {role >= 1 && (
            <Sidebar.Collapse icon={FaChartBar} label="CRM">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold text-red-500" : ""
                }
                to={"/crm/recipes"}
              >
                <SideBarItem title="Recipes">
                  <FaPizzaSlice />
                </SideBarItem>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold text-red-500" : ""
                }
                to={"/crm/users"}
              >
                <SideBarItem title="Users">
                  <FaUser />
                </SideBarItem>
              </NavLink>
            </Sidebar.Collapse>
          )}
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold text-red-500" : ""
              }
              to={"/profile/favorites"}
            >
              <SideBarItem title={`Fvorites`}>
                <FaStar />
              </SideBarItem>
            </NavLink>
          )}
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-500" : ""
            }
            to={"/my-recipes"}
          >
            {isLoggedIn && (
              <SideBarItem title="My Recipes">
                <FaBookOpen />
              </SideBarItem>
            )}
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold text-red-500" : ""
              }
              to={"/create"}
            >
              <SideBarItem title="Share Recipe">
                <IoCreate />
              </SideBarItem>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold text-red-500" : ""
              }
              to={"/profile/edit"}
            >
              <SideBarItem title={`${Iuser.name.first} ${Iuser.name.last}`}>
                <Avatar img={`${userUrl}${Iuser.image}`} />
              </SideBarItem>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to={"/"} onClick={() => logout()}>
              <SideBarItem title="Log Out">
                <HiArrowSmLeft />
              </SideBarItem>
            </NavLink>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default RootSideBar;
