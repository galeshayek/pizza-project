import { Outlet } from "react-router-dom";
import MysideBar from "./sideBar";
import { FooterComponent } from "./Footer";

const Root = () => {
  return (
    <div>
      <span className="flex">
        <header>
          <MysideBar />
        </header>
        <main className="grow">
          <Outlet />
        </main>
      </span>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};

export default Root;
