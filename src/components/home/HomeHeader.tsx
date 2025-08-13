import mobileHeaderImg from "../../assets/mobile/image-hero.jpg";
import tabletHeaderImg from "../../assets/tablet/image-hero.jpg";
import desktopHeaderImg from "../../assets/desktop/image-hero.jpg";
import desktopHeaderImg2x from "../../assets/desktop/image-hero@2x.jpg";


import arrowRight from "../../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="header relative px-2 sm:px-0 3xl:max-w-[2000px] 3xl:mx-auto">
      <div className="md:flex lg:gap-0">
        <div className="bg-almost-black shrink-0 hidden lg:w-[5rem] xl:w-[20rem] 3xl:w-[25rem] lg:h-[50rem] lg:block"></div>
        <div className="header-image-container lg:relative">
          <picture>
            <source media="(max-width:767px)" srcSet={mobileHeaderImg} />
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcSet={tabletHeaderImg}
            />
            <source
              media="(min-width: 1024px) and (max-width: 1680px)"
              srcSet={desktopHeaderImg}
            />
            <source media="(min-width: 1680px)" srcSet={desktopHeaderImg2x} />

            <img
              src={mobileHeaderImg}
              alt=""
              className="w-full md:w-full lg:w-[37rem] xl:w-[40rem] 3xl:w-[50rem] shrink-0 md:h-[50rem] h-auto object-contain md:object-cover"
            />
          </picture>
        </div>
        <h1
          className="hidden lg:absolute lg:mix-blend-difference
                      font-bigShouldersDisplay font-[900] uppercase text-center sm:text-left
                      text-[2.5rem] sm:text-[3.125rem] md:text-[4.375rem] xl:text-[6rem]
                      leading-[2.25rem] sm:leading-[4rem] lg:leading-[5.5rem]
                       lg:text-white
                      w-full md:max-w-[10ch] lg:max-w-[10ch]
                      mt-[2rem] md:mt-0 lg:ml-[17rem]
                    "
        >
          Modern Art Gallery
        </h1>

        <div className="md:-ml-12 md:mt-44 lg:absolute lg:left-[40rem] xl:left-[56rem] 3xl:left-[71rem]  sm:pr-2 xl:pl-10">
          <h1
            className="
                      font-bigShouldersDisplay font-[900] uppercase text-center sm:text-left
                      text-[2.5rem] sm:text-[3.125rem] md:text-[4.375rem] xl:text-[6rem]
                      leading-[2.25rem] sm:leading-[4rem] lg:leading-[5.5rem]
                      text-almost-black
                      w-full md:max-w-[10ch]
                      mt-[2rem] md:mt-0
                    "
          >
            Modern Art Gallery
          </h1>
          <p
            className="
                      font-outfit
                      text-lg lg:text-[1.375rem]
                      leading-[1.75rem] sm:leading-[2rem]
                      text-dark-grey
                      w-full md:max-w-[30ch]
                      mt-[2rem] lg:mt-[2rem]
                    "
          >
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>

          <Link to={"/location"}>
            <button className="locationButton sm:px-[1rem] md:p-0 mt-[2rem] lg:mt-[2rem] flex group">
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
