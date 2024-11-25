import instaIcon from "../assets/instaIcon.svg";
import whatappIcon from "../assets/whatappIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import footerLogo from "../assets/footerLogo.png";
import { direction } from "./link-items";

export const Footer = () => {
  return (
    <>
      <div className="bg-footerBg px-14 py-24 flex flex-col gap-14 sm375:hidden sm:flex">
        <div className="flex justify-between">
          <div>
            <img src={footerLogo} alt="" />
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col gap-5 font-dmSans">
              <h4 className="text-solid text-2xl">Contact</h4>
              <div className="flex flex-col gap-3.5 text-base text-fade">
                <span>Mahika Homestay, Eranelloor, Panamaram PO, Wayand</span>
                <span>booking@mahikahomestay.com</span>
                <a className="block" href="tel:+91 9539 7265 63">
                  +91 9539 7265 63
                </a>
              </div>
            </div>
            <div className="flex gap-32">
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="text-solid text-2xl font-dmSans">Links</h4>
                </div>
                <div className="flex flex-col gap-3.5 text-fade font-dmSans">
                  <a href="#aboutus">About Mahika</a>
                  <a href="#roomTharif">Our Rooms</a>
                  <a href="1">Gallery</a>

                  <a href="#contact">Contact</a>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="text-solid text-2xl font-dmSans">Legal</h4>
                </div>
                <div className="flex flex-col gap-3.5 text-fade font-dmSans">
                  <a href="1">Privacy Policy</a>
                  <a href="1">Refund & Cancellation</a>
                  <a href="1">Policy</a>
                  <a href="1">Terms and Conditions</a>
                  <a href={direction} target="_blank">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-b px-9 py-7 border-footerBorder">
          <span className="text-solid font-dmSans">
            © 2024 Mahika Homestay. All Rights Reserved.
          </span>
          <div className="flex gap-11">
            <img src={instaIcon} alt="" />
            <img src={facebookIcon} alt="" />
            <img src={whatappIcon} alt="" />
            <img src={twitterIcon} alt="" />
          </div>
        </div>
      </div>
      <PhoneVeiw />
    </>
  );
};

export const PhoneVeiw = () => {
  return (
    <div className="sm375:block py-14 sm375:px-4 sm:hidden bg-footerBg">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-10">
          <div>
            <img src={footerLogo} alt="" />
          </div>
          <div className="flex gap-11">
            <img src={instaIcon} alt="" />
            <img src={facebookIcon} alt="" />
            <img src={whatappIcon} alt="" />
            <img src={twitterIcon} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-solid text-xl">Contact</h4>
          <div className="flex flex-col gap-3.5 text-sm text-fade font-dmSans">
            <span>Mahika Homestay, Eranelloor, Panamaram PO, Wayand</span>
            <span>booking@mahikahomestay.com</span>
            <a className="block" href="tel:+91 9539 7265 63">
              +91 9539 7265 63
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-32">
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-solid text-xl">Links</h4>
              </div>
              <div className="flex flex-col gap-3.5 text-fade text-sm font-dmSans">
                <a href="#aboutus">About Mahika</a>
                <a href="#roomTharif">Our Rooms</a>
                <a href="1">Gallery</a>
                <a href="#Contact">Contact</a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-solid text-xl">Legal</h4>
              </div>
              <div className="flex flex-col gap-3.5 text-fade text-sm">
                <a href="1">Privacy Policy</a>
                <a href="1">Refund & Cancellation</a>
                <a href="1">Policy</a>
                <a href="1">Terms and Conditions</a>
                <a href={direction}>Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
