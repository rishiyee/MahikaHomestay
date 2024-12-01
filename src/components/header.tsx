import { NavLeft } from "./nav-left";
import MahikaLogo from "../assets/mahika-logo.svg";
import { NavRight } from "./nav-right";
import phoneimg from "../assets/Callimg.svg";
import whatappimg from "../assets/whatapp.svg";
import menuicon from "../assets/menuicon.svg";
import closeIcon from "../assets/closeIcon.svg";
import phoneLogo from "../assets/phoneLogo.svg";
import { useState } from "react";
import { Link} from "react-router-dom";
type Props = {
  menuPanel?: boolean;
  setMenuPanel?: (value: boolean) => void;
};
export const Header = () => {
  return (
    <>
      <div className="flex px-32 py-6 justify-between items-center sm375:hidden sm:flex scroll-smooth sticky top-0 bg-solid z-10">
        <NavLeft />
        <div className="">
          <Link to="/#home">
            <img src={MahikaLogo} alt="Mahika Logo" />
          </Link>
        </div>
        <NavRight />
      </div>
      <PhoneVeiw />
    </>
  );
};

export const PhoneVeiw = () => {
  const [menuPanel, setMenuPanel] = useState(false);
  const whatappMessageHandle = () => {
    const whatsappMessage =
      "Hi, I'm interested in learning more about Mahika Homestay. Could you please share details about availability, pricing, and amenities? Thank you!";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "919539726563";
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="sm:hidden sticky top-0 z-10">
      <div className="flex justify-between bg-baseText px-4 py-3 items-center">
        <div>
          <Link to="tel:+91 9539 7265 63">
            <img src={phoneimg} alt="" />
          </Link>
        </div>
        <button className="px-5 py-1 bg-solid font-dmSans font-normal rounded-full">
          <Link to="#booking">Book Now</Link>
        </button>
        <div className="cursor-pointer" onClick={whatappMessageHandle}>
          <img src={whatappimg} alt="" />
        </div>
      </div>
      <div className="px-4 py-2 flex justify-between items-center bg-solid">
        <div className="">
          <Link to="#home">
            <img src={phoneLogo} alt="Mahika Logo" />
          </Link>
        </div>
        <div onClick={() => setMenuPanel(!menuPanel)}>
          {!menuPanel && (
            <img
              src={menuicon}
              alt=""
              className="transition-transform duration-300"
            />
          )}
          {menuPanel && <img src={closeIcon} alt="" />}
        </div>
      </div>
      {menuPanel && (
        <MenuPanel menuPanel={menuPanel} setMenuPanel={setMenuPanel} />
      )}
    </div>
  );
};

export const MenuPanel = ({ menuPanel, setMenuPanel }: Props) => {
  return (
    <div className="h-screen absolute top-24 right-0 left-0 bg-solid p-5 ">
      <MenuPanelItems menuPanel={menuPanel} setMenuPanel={setMenuPanel} />
    </div>
  );
};

export const MenuPanelItems = ({ setMenuPanel }: Props) => {
  return (
    <div className="flex flex-col font-dmSans text-">
      <Link
        to="/#home"
        onClick={() => setMenuPanel?.(false)}
        className="px-2 py-3 text-center border-dotted border-b-2"
      >
        Home
      </Link>
      <Link
        to="/#aboutus"
        onClick={() => setMenuPanel?.(false)}
        className="px-2 py-3 text-center border-dotted border-b-2"
      >
        About
      </Link>
      <Link
        to="/gallery"
        onClick={() => setMenuPanel?.(false)}
        className="px-2 py-3 text-center border-dotted border-b-2"
      >
        Gallery
      </Link>
      <Link
        to="/#contact"
        onClick={() => setMenuPanel?.(false)}
        className="px-2 py-3 text-center border-dotted border-b-2"
      >
        Contact
      </Link>
      <Link
        to="/#booking"
        onClick={() => setMenuPanel?.(false)}
        className="px-2 py-3 text-center border-dotted border-b-2"
      >
        Book Now
      </Link>
    </div>
  );
};

