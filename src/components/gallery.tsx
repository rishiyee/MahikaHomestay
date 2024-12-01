import Gallery1 from "../assets/MahikaGallery/Gallery1.jpg";
import Gallery2 from "../assets/MahikaGallery/Gallery2.jpg";
import Gallery3 from "../assets/MahikaGallery/Gallery3.jpg";
import Gallery4 from "../assets/MahikaGallery/Gallery4.jpg";
import Gallery5 from "../assets/MahikaGallery/Gallery5.jpg";
import Gallery6 from "../assets/MahikaGallery/Gallery6.jpg";
import Gallery7 from "../assets/MahikaGallery/Gallery7.jpg";
import Gallery8 from "../assets/MahikaGallery/Gallery8.jpg";
import Gallery9 from "../assets/MahikaGallery/Gallery9.jpg";
import Gallery10 from "../assets/MahikaGallery/Gallery10.jpg";
import Gallery11 from "../assets/MahikaGallery/Gallery11.jpg";
import Gallery12 from "../assets/MahikaGallery/Gallery12.jpg";
import Gallery13 from "../assets/MahikaGallery/Gallery13.jpg";
import Gallery14 from "../assets/MahikaGallery/Gallery14.jpg";
import Gallery15 from "../assets/MahikaGallery/Gallery15.jpg";
import Gallery16 from "../assets/MahikaGallery/Gallery16.jpg";
import Gallery17 from "../assets/MahikaGallery/Gallery17.jpg";
import Gallery18 from "../assets/MahikaGallery/Gallery18.jpg";
import Gallery19 from "../assets/MahikaGallery/Gallery19.jpg";
import Gallery20 from "../assets/MahikaGallery/Gallery20.jpg";
import Gallery21 from "../assets/MahikaGallery/Gallery21.jpg";

export const Gallery = () => {
  return (
    <div>
      <div className="px-4 py-14 sm:px-32 sm:py-24">
        <p className="text-center sm:text-base text-fade font-dmSans sm375:text-sm ">
          GALLERY
        </p>

        <span className="block text-baseText text-center font-dmSans text-4xl pt-1 sm:text-6xl">
          Discover Tranquility Through Our Lens
        </span>
        <div className="flex justify-center">
          <span className="text-fade font-dmSans sm:text-xl pt-4 block sm:w-1/2 text-center">
            Browse through our stunning collection of images, each telling the
            story of Mahika Homestay’s serene beauty. From cozy rooms to scenic
            views, experience the peaceful retreat that awaits you."
          </span>
        </div>
      </div>
      <div className="px-32 grid grid-cols-12 gap-4 pb-32 sm375:hidden sm:flex">
        {/* Column 1: Images 1–6 */}
        <div className="col-span-3">
          <div className="flex flex-col gap-4">
            <img src={Gallery5} alt="" className="rounded-2xl" />
            <img src={Gallery1} alt="" className="rounded-2xl" />
            <img src={Gallery2} alt="" className="rounded-2xl" />
            <img src={Gallery3} alt="" className="rounded-2xl" />
            <img src={Gallery4} alt="" className="rounded-2xl" />
            <img src={Gallery6} alt="" className="rounded-2xl" />
          </div>
        </div>

        {/* Column 2: Images 7–12 */}
        <div className="col-span-3">
          <div className="flex flex-col gap-4">
            <img src={Gallery7} alt="" className="rounded-2xl" />
            <img src={Gallery11} alt="" className="rounded-2xl" />
            <img src={Gallery8} alt="" className="rounded-2xl" />
            <img src={Gallery12} alt="" className="rounded-2xl" />
            <img src={Gallery9} alt="" className="rounded-2xl" />
            <img src={Gallery10} alt="" className="rounded-2xl" />
          </div>
        </div>

        {/* Column 3: Images 13–18 */}
        <div className="col-span-3">
          <div className="flex flex-col gap-4">
            <img src={Gallery20} alt="" className="rounded-2xl" />

            <img src={Gallery15} alt="" className="rounded-2xl" />
            <img src={Gallery17} alt="" className="rounded-2xl" />
            <img src={Gallery13} alt="" className="rounded-2xl" />
            <img src={Gallery18} alt="" className="rounded-2xl" />
            <img src={Gallery13} alt="" className="rounded-2xl" />
          </div>
        </div>

        {/* Column 4: Images 19–22 */}
        <div className="col-span-3">
          <div className="flex flex-col gap-4">
            <img src={Gallery19} alt="" className="rounded-2xl" />
            <img src={Gallery4} alt="" className="rounded-2xl" />
            <img src={Gallery14} alt="" className="rounded-2xl" />
            <img src={Gallery21} alt="" className="rounded-2xl" />
            <img src={Gallery16} alt="" className="rounded-2xl" />
            <img src={Gallery5} alt="" className="rounded-2xl" />
          </div>
        </div>
      </div>
      <PhoneGallery />
    </div>
  );
};

export const PhoneGallery = () => {
  return (
    <div className="px-4 sm:px-32 grid grid-cols-12 gap-4 sm:gap-4 pb-32 sm:hidden">
      {/* Column 1: Images 1–6 */}
      <div className="col-span-6">
        <div className="flex flex-col gap-4 sm:gap-4">
          <img src={Gallery5} alt="" className="rounded-2xl" />
          <img src={Gallery1} alt="" className="rounded-2xl" />
          <img src={Gallery2} alt="" className="rounded-2xl" />
          <img src={Gallery3} alt="" className="rounded-2xl" />
          <img src={Gallery4} alt="" className="rounded-2xl" />
          <img src={Gallery6} alt="" className="rounded-2xl" />
          <img src={Gallery7} alt="" className="rounded-2xl" />
          <img src={Gallery11} alt="" className="rounded-2xl" />
          <img src={Gallery8} alt="" className="rounded-2xl" />
          <img src={Gallery12} alt="" className="rounded-2xl" />
          <img src={Gallery9} alt="" className="rounded-2xl" />
          <img src={Gallery10} alt="" className="rounded-2xl" />
        </div>
      </div>
      <div className="col-span-6">
        <div className="flex flex-col gap-4 sm:gap-4">
          <img src={Gallery20} alt="" className="rounded-2xl" />
          <img src={Gallery15} alt="" className="rounded-2xl" />
          <img src={Gallery17} alt="" className="rounded-2xl" />
          <img src={Gallery13} alt="" className="rounded-2xl" />
          <img src={Gallery18} alt="" className="rounded-2xl" />
          <img src={Gallery13} alt="" className="rounded-2xl" />
          <img src={Gallery19} alt="" className="rounded-2xl" />
          <img src={Gallery4} alt="" className="rounded-2xl" />
          <img src={Gallery14} alt="" className="rounded-2xl" />
          <img src={Gallery21} alt="" className="rounded-2xl" />
          <img src={Gallery16} alt="" className="rounded-2xl" />
          <img src={Gallery5} alt="" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
