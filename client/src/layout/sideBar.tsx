import { Sidebar } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  FaCircle,
  FaPen,
  FaPizzaSlice,
  FaSquare,
  FaUpload,
  FaUser,
} from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { closeSideBarContext } from "../contexts/closeSideBar";
import SideBarItem from "../components/SideBarItem";
import { AuthContext } from "../contexts/AuthContext";
import { IUser } from "../@types/types.user";

const MysideBar = () => {
  const { isClosed } = useContext(closeSideBarContext);
  const [visibility, setvisibility] = useState("sticky");
  const { user, logout, isLoggedIn, role } = useContext(AuthContext);
  const Iuser: IUser = user;
  useEffect(() => {
    isClosed == true ? setvisibility("hidden") : setvisibility("sticky");
  }, [isClosed]);

  return (
    <Sidebar
      className={`${visibility} top-0 h-screen border-r-2 border-gray-200`}
      aria-label="Sidebar with logo branding example"
    >
      <Sidebar.Logo href="#" img="/vite.svg" imgAlt="vite logo">
        <p>Pizza Master</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <NavLink to={"/"}>
            <SideBarItem title="Home">
              <FaPizzaSlice />
            </SideBarItem>
          </NavLink>
          <NavLink to={"/recipes/Dough"}>
            <SideBarItem title="Dough">
              <FaCircle />
            </SideBarItem>
          </NavLink>
          <NavLink to={"/recipes/Sauce"}>
            <SideBarItem title="Sauce">
              <FaSquare />
            </SideBarItem>
          </NavLink>
          <NavLink to={"/recipes/Toppings"}>
            <SideBarItem title="Toppings">
              <BsTriangleFill />
            </SideBarItem>
          </NavLink>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {!isLoggedIn && (
            <NavLink to={"/login"}>
              <SideBarItem title="Sign In">
                <HiArrowSmRight />
              </SideBarItem>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to={"/register"}>
              <SideBarItem title="Sign Up">
                <FaPen />
              </SideBarItem>
            </NavLink>
          )}
          {role >= 1 && (
            <Sidebar.Collapse icon={FaChartBar} label="CRM">
              <NavLink to={"/"}>
                <SideBarItem title="Recipes">
                  <FaPizzaSlice />
                </SideBarItem>
              </NavLink>
              <NavLink to={"/"}>
                <SideBarItem title="Users">
                  <FaUser />
                </SideBarItem>
              </NavLink>
            </Sidebar.Collapse>
          )}
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {isLoggedIn && (
            <NavLink to={"/profile/favorites"}>
              <SideBarItem title={`${Iuser.name.first} ${Iuser.name.last}`}>
                <CgProfile />
              </SideBarItem>
            </NavLink>
          )}
          <NavLink to={"/my-recipes"}>
            {isLoggedIn && (
              <SideBarItem title="My Recipes">
                <FaPen />
              </SideBarItem>
            )}
          </NavLink>
          {isLoggedIn && (
            <NavLink to={"/create"}>
              <SideBarItem title="Share Recipe">
                <FaUpload />
              </SideBarItem>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to={"/"} onClick={() => logout()}>
              <SideBarItem title="Sign Out">
                <HiArrowSmLeft />
              </SideBarItem>
            </NavLink>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default MysideBar;
