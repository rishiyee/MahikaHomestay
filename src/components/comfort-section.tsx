import coffePathimg from "../assets/2149043027 1.png";
import campfireimg from "../assets/camphire.png";
import homeDiningimg from "../assets/homeStyleDining.png";
import coffepathphoneimg from "../assets/comfortimgphone1.png"
import cmapfirephoneing from "../assets/cmpfirephone.png"
import homediningphone from "../assets/homediningphone.png"
export const ComfortSection = () => {
  return (
    <div className="sm:py-24 sm:px-32 flex flex-col items-center gap-8 sm375:px-4 sm375:py-14">
      <div className="flex flex-col sm:gap-4 items-center sm375:gap-2">
        <span className="text-baseText font-normal sm:text-5xl font-dmSans sm375:text-2xl">
          <span className="text-primary">Mahika:</span> Simply Special
        </span>
        <p className="text-center  text-fade font-normal text-xl sm:w-3/4">
          At Mahika Homestay, we blend comfort with nature. From personalized
          services to serene surroundings, every detail is designed to offer a
          unique, rejuvenating experience, whether it's the homely food or
          coffee plantation walks.
        </p>
      </div>
      <div className="flex sm:flex-row gap-4 text-base text-baseText font-dmSans sm375:flex-col">
        <div>
          <img src={coffePathimg} alt="" className="sm375:hidden sm:block" />
          <img src={coffepathphoneimg} alt="" className="sm:hidden" />
          Trek Coffee Paths
        </div>
        <div>
          <img src={campfireimg} alt="" className="sm375:hidden sm:block" />
          <img src={cmapfirephoneing} alt="" className="sm:hidden" />
          Campfire Moments{" "}
        </div>
        <div>
          <img src={homeDiningimg} alt="" className="sm375:hidden sm:block" />
          <img src={homediningphone} alt="" className="sm:hidden" />
          Homestyle Dining{" "}
        </div>
      </div>
    </div>
  );
};
