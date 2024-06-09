import { useContext } from "react";
import { IsideBar } from "../@types/types";
import { FavContext } from "../contexts/FavContext";

const SideBarItem: IsideBar = ({ children, title }) => {
  const { toggle } = useContext(FavContext);
  return (
    <div
      onClick={() => toggle(Math.random().toString())}
      className=" flex gap-2 rounded-lg p-2 hover:bg-gray-100"
    >
      <i className="text-2xl text-gray-500">{children}</i>
      <p className="place-self-center">{title}</p>
    </div>
  );
};

export default SideBarItem;
