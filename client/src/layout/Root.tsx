import { Outlet } from "react-router-dom";
import MysideBar from "./MySideBar";
import { FooterComponent } from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
  return (
    <div>
      <span className="md:flex">
        <header>
          <MysideBar />
        </header>
        <main className="max-md:pt-16 md:grow">
          <ScrollToTop />
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
