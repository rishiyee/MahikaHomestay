import roomImage from "../assets/Room.png";

export const RoomDetail = () => {
  return (
    <div className="sm:px-24 sm:py-32 flex flex-col items-center gap-8 sm375:py-14 sm375:px-4">
      <div className="flex flex-col sm:gap-3 items-center sm375:gap-2">
        <span className="sm:text-4xl text-baseText font-normal font-dmSans sm375:text-2xl text-center">
          Exquisite Cottage Accommodations
        </span>
        <span className="text-fade sm:text-xl text-center sm:w-3/4 font-normal font-dmSans sm375:text-lg">
          Experience comfort and charm in our exquisite cottages, blending
          rustic elegance with modern amenities for a peaceful, luxurious stay.
        </span>
      </div>
      <div className="flex justify-center gap-4 sm:flex-row sm375:flex-col">
        <div>
          <div>
            <img src={roomImage} alt="" />
          </div>
          <span className="text-baseText text-2xl font-normal font-dmSans">
            Luxury Cottage Room
          </span>
          <p className="text-fade font-dmSans font-normal sm:text-base sm375:text-sm">
            Our spacious suites embody luxury and sophistication and enjoy the{" "}
            <br className="sm:block sm375:hidden"/>
            experience with a spacious sitting area, luxury bedding and free
            Wi-Fi.
          </p>
        </div>
        <div>
          <div>
            <img src={roomImage} alt="" />
          </div>
          <span className="text-baseText text-2xl font-normal font-dmSans">
            Luxury Cottage Room
          </span>
          <p className="text-fade font-dmSans font-normal sm:text-base sm375:text-sm">
            Our spacious suites embody luxury and sophistication and enjoy the{" "}
            <br className="sm:block sm375:hidden"/>
            experience with a spacious sitting area, luxury bedding and free
            Wi-Fi.
          </p>
        </div>
      </div>
    </div>
  );
};
