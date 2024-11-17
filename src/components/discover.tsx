import pookodeLake from "../assets/Pookode Lake.png";
import karappuzhaDam from "../assets/Karappuzha Dam.png";
import kuruvaIsland from "../assets/Kuruva Island.png";
import ancientJainTemple from "../assets/Ancient Jain Temple.png";
import bandipurPark from "../assets/Bandipur Park.png";
interface PlacesProp{
  image?: string;
  text?: string;
}
export const Discover = () => {
  return (
    <div className="sm:px-32 sm:py-24 flex flex-col gap-4 sm375:px-4 sm375:py-14">
      <div className="flex flex-col sm:gap-3 sm375:gap-2">
        <span className="text-center text-baseText font-dmSans font-normal sm:text-4xl sm375:text-2xl">
          Discover Nearby Wonders
        </span>
        <p className="text-center text-fade font-dmSans font-normal sm375:text-base sm:text-xl">
          Explore the beauty and culture surrounding Mahika Homestay. From
          serene natural landscapes to vibrant local attractions, <br className="sm:block sm375:hidden"/> there’s
          something for everyone just a short distance away.
        </p>
      </div>
      
      <div className="flex gap-4 justify-center sm:flex-row sm375:flex-col sm375:w-full">
        <Places image={pookodeLake} text="Pookode Lake" />
        <Places image={karappuzhaDam} text="Karappuzha Dam" />
        <Places image={kuruvaIsland} text="Kuruva Island" />
        <Places image={ancientJainTemple} text="Acient Jain Temple" />
        <Places image={bandipurPark} text="Bandipur Park" />
      </div>
    </div>
  );
};

export const Places = ({ image, text}:PlacesProp) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="sm:w-52 sm:h-56 sm375:h-54">
        <img src={image} alt="" className="size-full object-cover" />
      </div>
      <span className="text base text-baseText font-normal font-dmSans">{text}</span>
    </div>
  );
};
