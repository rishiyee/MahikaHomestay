import map from "../assets/map.png";
import arrow from "../assets/Vector.svg";

export const Direction = () => {
  return (
    <div className="sm:px-32 sm:py-24 flex sm:flex-row sm375:flex-col sm:gap-16 sm375:px-4 sm375:py-14 sm375:gap-4">
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-col sm:gap-3 sm375:gap-2">
          <h1 className="text-baseText font-normal font-dmSans sm:text-4xl sm375:text-2xl">
            Reaching <span className="text-primary">Mahika</span>{" "}
          </h1>
          <p className="text-fade font-dmSans font-normal sm:text-xl sm375:text-base">
            Getting to Mahikha is easy and convenient. Located in the heart of
            Wayanad, our homestay is easily accessible by road from major cities
            like Bangalore and Kochi. Do contact us if you need further help in
            this regard.
          </p>
        </div>
        <div className="flex gap-2 items-center sm375:pt-5 sm:pt-10">
          <div>
            <img src={arrow} alt="" />
          </div>
          <p className="text-primary font-dmSans font-normal text-base ">
            Get Direction
          </p>
        </div>
      </div>
      <div className="flex-1">
        <img src={map} alt="" className="w-full" />
      </div>
    </div>
  );
};
