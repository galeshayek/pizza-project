import { Button, Drawer } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import RootSideBar from "../components/RootSideBar";
import useWindowSize from "../hooks/useWindowSize";
import { FaBars } from "react-icons/fa";
import { FavContext } from "../contexts/FavContext";
import { closeSideBarContext } from "../contexts/closeSideBar";

const MysideBar = () => {
  const { width } = useWindowSize();
  const { status } = useContext(FavContext);
  const { isClosed } = useContext(closeSideBarContext);
  const [visibility, setvisibility] = useState("fixed");
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    isClosed == true ? setvisibility("hidden") : setvisibility("fixed");
  }, [isClosed]);

  useEffect(() => {
    setIsOpen(false);
  }, [status]);

  return width >= 768 ? (
    <RootSideBar />
  ) : (
    <>
      <div
        className={`${visibility} top-0 z-40 h-16 w-dvw bg-white pl-4 pt-4 shadow`}
      >
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <FaBars />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Items>
          <RootSideBar />
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MysideBar;
