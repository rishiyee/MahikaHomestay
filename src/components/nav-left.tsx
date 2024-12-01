import { Link } from "react-router-dom";

export const NavLeft = () => {
  
  return (
    <div className="flex gap-8 text-baseText font-dmSans font-normal text-base">
      <Link to="/gallery" className="animate-anchor">
        Gallery
      </Link>
      <Link to="/#aboutus" className="scroll-smooth animate-anchor">
        About us
      </Link>
      <Link to="/#home" className="animate-anchor">Home</Link>
    </div>
  );
};
