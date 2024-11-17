import firstphoto from "../assets/i.png";
import secondphoto from "../assets/im.png";
import phoneimage from "../assets/phoneAboutimg1.png";
import phoneimageother from "../assets/phoneaboutimage2.png"

export const ImageSection = () => {
  return (
    <div className="sm375:flex-col sm375:gap-2.5 flex justify-center sm:gap-4 sm:py-14 sm:px-32 sm:flex-row ">
      <div className="flex justify-center">
        <img src={firstphoto} alt="" className="sm:block sm375:hidden" />
        <img src={phoneimage} alt="" className="sm:hidden" />
      </div>
      <div className="flex justify-center">
        <img src={secondphoto} alt="" className="sm:block sm375:hidden" />
        <img src={phoneimageother} alt="" className="sm:hidden" />
      </div>
    </div>
  );
};
