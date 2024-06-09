import { Footer } from "flowbite-react";
import { useContext } from "react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { closeSideBarContext } from "../contexts/closeSideBar";

export function FooterComponent() {
  const { isClosed } = useContext(closeSideBarContext);

  return !isClosed ? (
    <Footer className="border-t-2 bg-gray-50" container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="#"
            src="/assets/images/logo.png"
            alt="pizza master Logo"
            name="PIZZA MASTER"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="mailto:galeshayek15@gmail.com">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Gal Eshayek" year={2024} />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon
              href="#https://www.facebook.com/galeshayek"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#https://www.instagram.com/gal_eshayek/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#https://github.com/galeshayek"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  ) : (
    <></>
  );
}
