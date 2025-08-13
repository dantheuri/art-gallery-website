import logoLight from "../../assets/logo-light.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import twitterIcon from "../../assets/icon-twitter.svg";

const HomeFooter = () => {
  return (
    <footer className="footer w-full mt-[7.5rem] lg:mt-[11.5rem] grid grid-cols-1 lg:flex  px-2 sm:px-8 lg:px-10 py-12 lg:py-20 bg-almost-black">
      <div className="max-w-[70rem] xl:max-w-[80rem] gap-y-10 mx-auto w-full grid grid-cols-1 lg:flex lg:justify-between lg:items-center">
        <img
          src={logoLight}
          alt=""
          className="object-contain w-[5.5rem] sm:w-[7rem] h-[2rem] sm:h-[2.5rem] lg:w-[10rem] lg:h-[3.625rem]"
        />

        <div className="footer-text-container lg:max-w-[26.875rem]">
          <p className="leading-[1.5rem] sm:leading-[1.625rem] lg:leading-[1.75rem] font-[300] text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] font-outfit text-white">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
        </div>

        <div className="flex gap-x-[1rem] sm:gap-x-[1.25rem] h-[1rem] sm:h-[1.25rem]">
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
