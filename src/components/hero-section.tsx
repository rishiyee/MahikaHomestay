import phoneheroimg from "../assets/phoneveiwhero.png";
export const HeroSection = () => {
  return (
    <>
      <div className="py-24 flex flex-col sm375:hidden sm:flex">
        <span className="text-6xl text-center text-baseText font-dmSans font-light">
          Reconnect with Nature at
        </span>
        <span className="text-6xl text-center text-primary font-dmSans font-medium">
          Mahika Homestay
        </span>
        <p className="text-center pt-4 text-fade text-xl">
          Experience tranquility in nature’s embrace at Mahika Homestay, your
          peaceful <br /> retreat in the coffee estate.
        </p>
      </div>
      <PhoneVeiw />
    </>
  );
};

export const PhoneVeiw = () => {
  return (
    <div className="sm:hidden">
      <div className="flex justify-center">
        <img src={phoneheroimg} alt="Phone View of Hero Section" />
      </div>
      <div className="px-4 py-14 flex flex-col">
        <span className="text-2xl text-center text-baseText font-dmSans font-light">
          Reconnect with Nature at
        </span>
        <span className="text-4xl text-center text-primary font-dmSans font-medium">
          Mahika Homestay
        </span>
        <p className="text-center pt-4 text-fade text-base">
          Experience tranquility in nature’s embrace at Mahika Homestay, your
          peaceful retreat in the coffee estate.
        </p>
      </div>
    </div>
  );
};
