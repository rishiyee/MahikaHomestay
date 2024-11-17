import cozyBedroom from "../assets/cozyBedroom.png";
import parkingimg from "../assets/Parking.svg"
import livingimg from "../assets/livingroom.svg"
import freeWifi from "../assets/freewifi.svg"
import sitoutimg from "../assets/sitout.svg"

interface FacilitiesProp {
  image?: string;
  text?: string;
}
export const Amenties = () => {
  return (
    <div className="sm:py-28 sm:px-32 flex flex-col gap-8 items-center sm375:px-4 sm375:py-14">
      <div className="flex flex-col sm:gap-4 items-center sm375:gap-2">
        <h3 className=" text-baseText sm:text-4xl text-center font-normal sm375:text-2xl">
          Elevate Your Stay with Our Premium Amenities
        </h3>
        <p className="sm:w-3/4 text-center sm:text-xl text-fade sm375:text-base">
          Indulge in a world of luxury and comfort with our exclusive homestay
          amenities, designed to create unforgettable experiences for you.
        </p>
      </div>
      <div className="flex sm:gap-6 sm:flex-row sm:w-fit sm375:flex-col sm375:w-full sm375:gap-4">
        <Facilities image={cozyBedroom} text="Cozy Bedroom" />
        <Facilities image={parkingimg} text="Private parking" />
        <Facilities image={livingimg} text="living rooms" />
        <Facilities image={freeWifi} text="free wi-fi" />
        <Facilities image={sitoutimg} text="sit out" />
      </div>
    </div>
  );
};

export const Facilities = ({ image, text }: FacilitiesProp) => {
  return (
    <div className="sm:py-12 sm:px-8 border rounded-lg sm375:flex-1 sm375:px-8 sm375:py-12">
      <div className="flex flex-col items-center gap-4 sm:w-32 sm375:w-full">
        <div className="size-10">
          <img src={image} alt="" className="size-full" />
        </div>
        <span className="text-baseText font-normal font-base font-dmSans text-center capitalize">
          {text}
        </span>
      </div>
    </div>
  );
};
