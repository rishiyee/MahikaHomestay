import arrow from "../assets/Vector.svg";

export const About = () => {
  return (
    <div className="sm:px-24 sm:py-28 sm:bg-about sm:bg-no-repeat sm:bg-center flex flex-col sm375:px-4 sm375:py-14">
      <p className="text-center sm:text-base text-fade font-dmSans sm375:text-sm ">ABOUT US</p>
      <span className="text-center sm:text-4xl text-primary font-dmSans font-normal sm375:text-2xl">
        Experience Mahika:
      </span>
      <span className="text-center sm:text-4xl text-baseText font-normal sm375:text-2xl">
        Where Luxury Begins in the Heart of Tranquil Greenery.
      </span>
      <p className="text-center sm:pt-4 sm:text-xl text-fade font-normal sm375:pt-2 sm375:text-base">
        A haven of refined luxury nestled in nature's serene embrace—welcome to
        Mahika Homestay, the boutique resort. Situated on the picturesque
        Kurubalakotta Hills, Mahika Homestay, the premier luxury retreat in
        Wayanad, invites you to indulge in a unique and unforgettable
        experience—The Mahika Experience.
      </p>
      <div className="flex gap-2 items-center justify-center p-2 sm:pt-10 sm375:pt-5">
        <div>
          <img src={arrow} alt="" />
        </div>
        <p className="text-primary font-dmSans font-normal text-base">Book stay</p>
      </div>
    </div>
  );
};

export const PhoneView = () => {};
