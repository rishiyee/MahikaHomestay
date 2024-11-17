import arrow from "../assets/Vector.svg";
import left from "../assets/prev.png.png";
import right from "../assets/right-arrow.png";
import invertedcoma from "../assets/invertedcoma.png";

export const Review = () => {
  return (
    <div className="sm:px-32 sm:py-24 bg-lightYellow flex justify-between items-center sm375:px-4 sm375:py-14">
      <div>
        <img src={left} alt="" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3.5">
          <div>
            <img src={invertedcoma} alt="" />
          </div>
          <p className="sm:text-base uppercase text-fade font-medium font-dmSans sm375:text-sm">
            Voice From Guests
          </p>
          <h1 className="sm:text-5xl text-primary font-dmSans font-normal sm375:text-2xl">Testimonials</h1>
        </div>
        <p className="text-center sm:text-xl pt-4 text-fade font-normal sm:w-3/4 sm375:text-base">
          Just amazing, beautiful and peaceful. There is no other word to
          describe this peaceful experience of ours. Just like we imagined. I
          wish I could take the balcony and view along with me, but it is not
          possible, is it? Thank you for the lovely experience.
        </p>
        <p className="pt-6 text-base text-baseText font-normal">Zeal and Gaurav</p>
        <div className="flex gap-2 items-center justify-center sm:pt-10 sm375:pt-5">
          <div>
            <img src={arrow} alt="" />
          </div>
          <p className="text-primary font-dmSans font-normal">Write a review</p>
        </div>
      </div>
      <div>
        <img src={right} alt="" />
      </div>
    </div>
  );
};
