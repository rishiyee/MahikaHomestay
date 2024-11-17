import instaIcon from "../assets/instaIcon.svg";
import whatappIcon from "../assets/whatappIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import footerLogo from "../assets/footerLogo.png";
export const Footer = () => {
  return (
    <>
      <div className="px-14 py-24 bg-[#181A19] flex flex-col gap-12 sm375:hidden sm:block">
        <div className="flex justify-between">
          <div>
            <img src={footerLogo} alt="" />
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col gap-5">
              <h4 className="text-solid text-2xl">Contact</h4>
              <div className="flex flex-col gap-3.5 text-base text-fade">
                <span>Mahika Homestay, Eranelloor, Panamaram PO, Wayand</span>
                <span>booking@mahikahomestay.com</span>
                <span>+91 9495 221 234</span>
              </div>
            </div>
            <div className="flex gap-32">
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="text-solid text-2xl">Links</h4>
                </div>
                <div className="flex flex-col gap-3.5 text-fade">
                  <a href="">About Mahika</a>
                  <a href="">Our Rooms</a>
                  <a href="">Dining</a>
                  <a href="">Gallery</a>
                  <a href="">Honeymoon</a>
                  <a href="">Contact</a>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="text-solid text-2xl">Leagl</h4>
                </div>
                <div className="flex flex-col gap-3.5 text-fade">
                  <a href="">About Mahika</a>
                  <a href="">Our Rooms</a>
                  <a href="">Dining</a>
                  <a href="">Gallery</a>
                  <a href="">Honeymoon</a>
                  <a href="">Contact</a>
                </div>
              </div>
            </div><div className="flex flex-col gap-5">
                <div>
                  <h4 className="text-solid text-2xl">Leagl</h4>
                </div>
                <div className="flex flex-col gap-3.5 text-fade">
                  <a href="">About Mahika</a>
                  <a href="">Our Rooms</a>
                  <a href="">Dining</a>
                  <a href="">Gallery</a>
                  <a href="">Honeymoon</a>
                  <a href="">Contact</a>
                </div>
              </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-b px-9 py-7 border-[#323232]">
          <span className="text-solid">
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
      <PhoneVeiw/>
    </>
  );
};

export const PhoneVeiw=()=>{
  return (
    <div className="sm375:block py-14 sm375:px-4 sm:hidden bg-baseText">
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
          <div className="flex flex-col gap-3.5 text-sm text-fade">
            <span>Mahika Homestay, Eranelloor, Panamaram PO, Wayand</span>
            <span>booking@mahikahomestay.com</span>
            <span>+91 9495 221 234</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
     
          <div className="flex gap-32">
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-solid text-xl">Links</h4>
              </div>
              <div className="flex flex-col gap-3.5 text-fade text-sm">
                <a href="">About Mahika</a>
                <a href="">Our Rooms</a>
                <a href="">Dining</a>
                <a href="">Gallery</a>
                <a href="">Honeymoon</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-solid text-xl">Leagl</h4>
              </div>
              <div className="flex flex-col gap-3.5 text-fade text-sm">
                <a href="">About Mahika</a>
                <a href="">Our Rooms</a>
                <a href="">Dining</a>
                <a href="">Gallery</a>
                <a href="">Honeymoon</a>
                <a href="">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}