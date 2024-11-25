import familyRooms from "../assets/Family Rooms.svg";
import parkingimg from "../assets/Parking .svg";
import privateBathrooms from "../assets/Bathrooms.svg";
import freeWifi from "../assets/Wifi.svg";
import sitoutimg from "../assets/Sit Out.svg";

interface FacilitiesProp {
  image?: string;
  text?: string;
}
export const Amenties = () => {
  return (
    <div className="sm:py-28 sm:px-32 flex flex-col gap-8 items-center sm375:px-4 sm375:py-14">
      <div className="flex flex-col sm:gap-4 items-center sm375:gap-2">
        <h3 className=" text-baseText sm:text-4xl text-center font-normal sm375:text-2xl font-dmSans">
          Elevate Your Stay with Our Premium Amenities
        </h3>
        <p className="sm:w-3/4 text-center sm:text-xl text-fade sm375:text-base font-dmSans">
          Indulge in a world of luxury and comfort with our exclusive homestay
          amenities, designed to create unforgettable experiences for you.
        </p>
      </div>
      <div className="flex sm:gap-6 sm:flex-row sm:w-fit sm375:flex-col sm375:w-full sm375:gap-4 sm:flex-wrap justify-center">
        <Facilities image={familyRooms} text="Family Rooms" />
        <Facilities image={parkingimg} text="Private parking" />
        <Facilities image={freeWifi} text="free wi-fi" />
        <Facilities image={sitoutimg} text="sit out" />
        <Facilities image={privateBathrooms} text="Private Bathrooms" />
      </div>
    </div>
  );
};

export const Facilities = ({ image, text }: FacilitiesProp) => {
  return (
    <div className="sm:py-12 sm:px-8 border rounded-lg sm375:flex-1 sm375:px-8 sm375:py-12 sm:flex-grow-0">
      <div className="flex flex-col items-center gap-4 sm:w-32 sm375:w-full">
        <div className="size-10">
          <img src={image} alt="" className="size-full" />
        </div>
        <span className="text-baseText font-normal font-base font-dmSans text-center capitalize text-nowrap">
          {text}
        </span>
      </div>
    </div>
  );
};
