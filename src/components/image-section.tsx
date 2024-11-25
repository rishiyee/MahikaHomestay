import firstphoto from "../assets/i.png";
import secondphoto from "../assets/im.png";
import phoneimage from "../assets/phoneAboutPhotoOne.jpg";
import phoneimageother from "../assets/phoneAboutImagetwo.jpg";

export const ImageSection = () => {
  return (
    <div className="sm375:flex-col sm375:gap-2.5 flex justify-center sm:gap-4 sm:py-14 sm:px-32 sm:flex-row ">
      <div className="flex justify-center ">
        <img src={firstphoto} alt="" className="sm:block sm375:hidden" />
        <div className="px-4 sm:hidden">
          <img src={phoneimage} alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={secondphoto} alt="" className="sm:block sm375:hidden" />
        <div className="sm:hidden px-4">
          <img src={phoneimageother} alt="" />
        </div>
      </div>
    </div>
  );
};
