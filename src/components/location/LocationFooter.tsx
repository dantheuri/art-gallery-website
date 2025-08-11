import logoDark from "../../assets/logo-dark.svg";
import facebookLogo from "../../assets/icon-facebook.svg";
import instagramLogo from "../../assets/icon-instagram.svg";
import twitterLogo from "../../assets/icon-twitter.svg";

const LocationFooter = () => {
  return (
    <footer className="px-[2rem] py-[3rem] bg-gold grid grid-cols-1 lg:flex gap-y-[2.5rem] w-full lg:px-[10.31rem]">
      <img
        src={logoDark}
        alt=""
        className="object-contain h-[2.5rem] lg:h-[3.625rem]"
      />
      <div className="footer-description lg:ml-[17.5rem] lg:w-[26.875rem]">
        <p className="text-almost-black font-outfit leading-[1.625rem]  lg:text-[1.15rem] lg:leading-[1.75rem]">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
      </div>

      <div className="flex gap-x-[1rem] lg:ml-[17.5rem] h-[1.25rem]">
        <img src={facebookLogo} alt="" className="" />
        <img src={instagramLogo} alt="" />
        <img src={twitterLogo} alt="" />
      </div>
    </footer>
  );
};
export default LocationFooter;
