import img from "../assets/photo1.png";
import img2 from "../assets/photo2.png";

export const SrollSection = () => {
  return (
    <div className="overflow-hidden sm375:hidden sm:block">
      <div className="flex gap-8 justify-center pb-24 animate-scroll">
        <div className="self-center">
          <img src={img2} alt="" />
        </div>
        <div className="flex items-center">
          <img src={img} alt="" />
        </div>
        <div className="self-center">
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div className="self-center">
          <img src={img2} alt="" />
        </div>
        <div className="flex items-center">
          <img src={img} alt="" />
        </div>
        <div className="self-center">
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div className="self-center">
          <img src={img2} alt="" />
        </div>
        <div className="self-center">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
