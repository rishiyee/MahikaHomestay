import { Link } from "react-router-dom";

export const NavRight = () => {
  return (
    <div className="sm:flex gap-8 text-baseText font-dmSans font-normal text-base sm375:hidden">
      <Link to="/#roomTharif" className="animate-anchor">
        Rooms
      </Link>
      <Link to="/#contact" className="animate-anchor">
        Book Your Stay
      </Link>
      <a  href="/#contact" className="animate-anchor">Contact</a>
    </div>
  );
}
