import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import RootSideBar from "../components/RootSideBar";
import useWindowSize from "../hooks/useWindowSize";

const MysideBar = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  return width >= 680 ? (
    <RootSideBar />
  ) : (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show navigation</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <RootSideBar />
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MysideBar;
