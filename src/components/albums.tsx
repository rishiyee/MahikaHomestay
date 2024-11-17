import albumone from "../assets/album1.png";
import albumtwo from "../assets/album2.png";
import albumthree from "../assets/album3.png";
import albumfour from "../assets/album4.png";
import albumfive from "../assets/album5.png";
import albumfsix from "../assets/album6.png";
import alubmphoneimg1 from "../assets/Albumphoneimg1.png";
import alubmphoneimg2 from "../assets/albumphoneimg2.png";
import alubmphoneimg3 from "../assets/albumphoneimg3.png";
import alubmphoneimg4 from "../assets/albumphoneimg4.png";
import alubmphoneimg5 from "../assets/albumphoneimg5.png";

export const Albums = () => {
  return (
    <div className="sm:px-32 sm:py-24 sm375:py-14 sm375:px-4">
      <div className="flex flex-col sm:gap-4 justify-center sm375:gap-2">
        <div className="flex flex-col">
          <span className="block uppercase text-center text-fade sm:text-base sm375:text-sm">
            photos
          </span>
          <h2 className="text-center sm:text-4xl text-baseText font-dmSans font-normal sm375:text-2xl">
            Take a look at our photo album.
          </h2>
        </div>
        <p className="text-center text-fade font-dmSans sm:text-xl sm375:text-base">
          Explore our curated photo collection, showcasing Mahika Homestay’s
          serene beauty,
          <br className="sm:block sm375:hidden" /> memorable moments, and
          tranquil charm.
        </p>
      </div>
      <div className="flex gap-2 justify-center pt-8 sm:flex sm375:hidden">
        <div className="flex flex-col gap-2">
          <div>
            <img src={albumone} alt="" />
          </div>
          <div>
            <img src={albumtwo} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <img src={albumthree} alt="" />
          </div>
          <div>
            <img src={albumfour} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <img src={albumfive} alt="" />
          </div>
          <div>
            <img src={albumfsix} alt="" />
          </div>
        </div>
      </div>
      <div className="sm375:flex sm375:flex-col sm375:gap-2.5 sm:hidden sm375:pt-2">
        <img src={alubmphoneimg1} alt="" />
        <img src={alubmphoneimg2} alt="" />
        <img src={alubmphoneimg3} alt="" />
        <img src={alubmphoneimg4} alt="" />
        <img src={alubmphoneimg5} alt="" />
      </div>
    </div>
  );
};
