import mobileImageGrid1 from "../../assets/mobile/image-grid-1.jpg";
import mobileImageGrid2 from "../../assets/mobile/image-grid-2.jpg";
import mobileImageGrid3 from "../../assets/mobile/image-grid-3.jpg";

import tabletImageGrid1 from "../../assets/tablet/image-grid-1.jpg";
import tabletImageGrid2 from "../../assets/tablet/image-grid-2.jpg";
import tabletImageGrid3 from "../../assets/tablet/image-grid-3.jpg";

import desktopImageGrid1 from "../../assets/desktop/image-grid-1.jpg";
import desktopImageGrid12x from "../../assets/desktop/image-grid-1@2x.jpg";

import desktopImageGrid2 from "../../assets/desktop/image-grid-2.jpg";
import desktopImageGrid22x from "../../assets/desktop/image-grid-2@2x.jpg";

import desktopImageGrid3 from "../../assets/desktop/image-grid-3.jpg";
import desktopImageGrid32x from "../../assets/desktop/image-grid-3@2x.jpg";

const HomeMain = () => {
  return (
    <main className="mt-[7.5rem] lg:mt-[11.25rem] px-2 sm:px-4 lg:px-10 lg:flex lg:flex-col lg:items-center">
      <section className="section-grid-1">
        <div className="grid grid-cols-1 sm:flex lg:max-w-[70rem] xl:max-w-[80rem] sm:gap-[4rem] lg:gap-[4rem] lg:items-start">
          <picture>
            <source media="(max-width: 767px)" srcSet={mobileImageGrid1} />
			<source
              media="(min-width: 768px) and (max-width: 1024px)"
              srcSet={tabletImageGrid1}
            />
            <source media="(min-width: 1024px) and (max-width: 1280px)" srcSet={desktopImageGrid1} />
			<source media="(min-width: 1280px)" srcSet={desktopImageGrid12x} />
            <img
              src={mobileImageGrid1}
              alt=""
              className="w-full lg:w-full lg:h-[28rem] object-cover"
            />
          </picture>

          <div className="grid1-text lg:w-[28rem] lg:py-[2rem]">
            <h2
              className="
						font-bigShouldersDisplay font-[900] uppercase
						text-[2.5rem] sm:text-[3.125rem] lg:text-[3.5rem]
						leading-[2.25rem] sm:leading-[2.8125rem] lg:leading-[3.5rem]
						w-full sm:max-w-[7ch] lg:max-w-none lg:w-full
						mt-[1.56rem] lg:m-0
					"
            >
              Your day at the gallery
            </h2>

            <p
              className="
						font-outfit
						text-[1rem] sm:text-[1.125rem] lg:text-[1.375rem]
						leading-[1.5rem] sm:leading-[1.75rem] lg:leading-[2rem]
						text-dark-grey
						w-full sm:max-w-[20ch] lg:max-w-none lg:w-full
						mt-[2rem]
					"
            >
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-grid-2 lg:mt-[2rem] mt-[2rem] xl:max-w-[80rem] grid grid-cols-1 sm:flex sm:gap-[1rem] lg:gap-[2rem]">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileImageGrid2} />
		  <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={tabletImageGrid2} />
          <source media="(min-width: 1024px) and (max-width: 1280px)" srcSet={desktopImageGrid2} />
		  <source media="(min-width: 1280px)" srcSet={desktopImageGrid22x} />

          <img
            src={mobileImageGrid2}
            alt=""
            className="w-full h-full sm:h-auto sm:w-[27rem] lg:h-full lg:w-full xl:max-w-[40rem] object-cover xl:object-contain"
          />
        </picture>

        <div className="lg:mt-0 flex flex-col lg:gap-[1rem]">
          <picture>
            <source media="(max-width: 767px)" srcSet={mobileImageGrid3} />
			<source media="(min-width: 768px) and (max-width: 1023px)" srcSet={tabletImageGrid3} />
            <source media="(min-width: 1024px) and (max-width: 1280px)" srcSet={desktopImageGrid3} />
			<source media="(min-width: 1280px)" srcSet={desktopImageGrid32x} />
            <img
              src={mobileImageGrid3}
              alt=""
              className="w-full sm:max-w-[22rem] lg:max-w-full xl:max-w-[35rem] lg:h-full object-contain"
            />
          </picture>
          <div className="w-full sm:max-w-[20rem] sm:h-full lg:max-w-none lg:w-full lg:h-full lg:mt-0 mt-[1rem] px-4 sm:px-6 lg:px-8 pt-12 sm:pt-12 lg:pt-10 pb-12 sm:pb-12 lg:pb-10 bg-almost-black text-white">
            <h2 className="font-[900] font-bigShouldersDisplay leading-[2.75rem] sm:leading-[3.75rem] lg:leading-[2.75rem] text-[2.75rem] sm:text-[3.75rem] lg:text-[2.75rem] uppercase">
              Come & Be Inspired
            </h2>
            <p className="md:max-w-[25ch] mt-[1.5rem] lg:mt-[1.5rem] font-outfit text-lg sm:text-[1.375rem] lg:text-[1.25rem] font-[300] leading-[1.75rem] sm:leading-[2rem] lg:leading-[1.875rem]">
              We're excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeMain;
