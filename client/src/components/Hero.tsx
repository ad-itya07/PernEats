import { useLocation } from "react-router-dom";
import hero from "../assets/hero.png";

const Hero = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div>
        <img src={hero} className="w-full max-h-[600px] object-cover" />
      </div>
    );
  }
  return;
};

export default Hero;
