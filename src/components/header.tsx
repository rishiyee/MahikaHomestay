import { NavLeft } from "./nav-left";
import MahikaLogo from "../assets/mahika-logo.svg";
import { NavRight } from "./nav-right";
import phoneimg from "../assets/Callimg.svg";
import mailimg from "../assets/Mail Button.svg";
import menuicon from "../assets/Menu Icon.svg";
import phoneLogo from "../assets/phoneLogo.png";

export const Header = () => {
  return (
    <>
      <div className="flex px-32 py-6 justify-between items-center sm375:hidden sm:flex">
        <NavLeft />
        <div className="">
          <img src={MahikaLogo} alt="Mahika Logo" className="fill-green-600"/>
        </div>
        <NavRight />
      </div>
      <PhoneVeiw />
    </>
  );
};

export const PhoneVeiw = () => {
  return (
    <div className="sm:hidden">
      <div className="flex justify-between bg-baseText px-4 py-3">
        <div>
          <img src={phoneimg} alt="" />
        </div>
        <button className="px-5 py-1 bg-solid font-dmSans font-normal rounded-full">
          Book Now
        </button>
        <div>
          <img src={mailimg} alt="" />
        </div>
      </div>
      <div className="px-4 py-2 flex justify-between items-center">
        <div className="">
          <img src={phoneLogo} alt="Mahika Logo" />
        </div>
        <div>
          <img src={menuicon} alt="" />
        </div>
      </div>
    </div>
  );
};
