import mobileHeaderImg from "../../assets/mobile/image-hero.jpg";
import tabletHeaderImg from "../../assets/tablet/image-hero.jpg";
import desktopHeaderImg from "../../assets/desktop/image-hero.jpg";

import grid2Image from "../../assets/desktop/image-grid-2.jpg";
import arrowRight from "../../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="header relative px-2 sm:px-0">
      <div className="lg:grid lg:grid-cols-[28rem,35rem]">
        <div className="bg-almost-black shrink-0 hidden lg:w-full lg:h-[49.9375rem] lg:block"></div>
        <div className="header-image-container lg:relative">
          <picture>
            <source media="(max-width:480px)" srcSet={mobileHeaderImg} />
            <source
              media="(min-width: 480px) and (max-width: 1024px)"
              srcSet={tabletHeaderImg}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={desktopHeaderImg}
              sizes=""
            />
            <img
              src={grid2Image}
              alt=""
              className="w-full lg:w-full shrink-0 lg:h-[50rem] h-auto object-cover"
            />
          </picture>
        </div>
        <h1 className="absolute lg:ml-[10.31rem] lg:mt-[11.87rem] mix-blend-difference font-bigShouldersDisplay lg:text-white lg:text-[6rem] lg:leading-[5.5rem] text-[2.5rem] sm:text-[3.125rem] leading-[2.25rem] sm:leading-[3.4375rem] font-[900] uppercase w-full lg:w-[28.125rem] mt-[2rem] lg:mt-0 text-almost-black lg:text-white">
          Modern Art Gallery
        </h1>
        <div className="absolute lg:ml-[58.5rem] lg:pt-[11.87rem]">
          <p className="text-[1.125rem] sm:text-[1.375rem] lg:w-[21.875rem] lg:mt-[2rem] leading-[1.75rem] sm:leading-[2rem] font-outfit text-dark-grey w-full mt-[2rem]">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Link to={"/location"}>
            <button className="locationButton px-2 sm:px-[1rem] lg:p-0 mt-[2rem] lg:mt-[2rem] flex group">
              <div className="flex justify-center items-center font-bigShouldersDisplay bg-almost-black text-white uppercase w-[10rem] sm:w-[12.75rem] h-[4rem] sm:h-[4.5rem] shrink-0 group-hover:bg-gold transition duration-300 ease-in-out">
                <p className="text-[1rem] sm:text-[1.25rem] tracking-[0.22725rem] font-[800]">
                  Our location
                </p>
              </div>
              <div className="bg-gold flex justify-center items-center w-[3rem] sm:w-[3.5rem] h-[4rem] sm:h-[4.5rem] group-hover:bg-almost-black group-hover:text-white transition duration-300 ease-in-out">
                <img src={arrowRight} alt="" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
