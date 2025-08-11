import mobileImageGrid1 from "../../assets/mobile/image-grid-1.jpg";
import mobileImageGrid2 from "../../assets/mobile/image-grid-2.jpg";
import mobileImageGrid3 from "../../assets/mobile/image-grid-3.jpg";
import desktopImageGrid1 from "../../assets/desktop/image-grid-1.jpg";
import desktopImageGrid2 from "../../assets/desktop/image-grid-2.jpg";
import desktopImageGrid3 from "../../assets/desktop/image-grid-3.jpg";

const HomeMain = () => {
  return (
    <main className="mt-[7.5rem] lg:mt-[11.25rem] px-2 sm:px-4 lg:px-0">
      <section className="section-grid-1">
        <div className="grid grid-cols-1 lg:grid-cols-[21.875rem,39.6875rem] lg:gap-x-[7.81rem] lg:justify-center">
          <picture>
            <source media="(max-width: 480px)" srcSet={mobileImageGrid1} />
            <source media="(min-width: 1024px)" srcSet={desktopImageGrid1} />
            <img
              src={mobileImageGrid1}
              alt=""
              className="w-full lg:w-[39.6875rem] lg:h-[25rem] h-[16rem] sm:h-[20rem] object-cover"
            />
          </picture>

          <div className="grid1-text lg:w-[21.875rem] lg:col-start-1 lg:row-start-1 lg:py-[3.75rem]">
            <h2 className="font-bigShouldersDisplay w-full lg:w-[21.875rem] lg:text-[3.75rem] lg:leading-[3.75rem] text-[2.5rem] sm:text-[3.125rem] mt-[1.56rem] lg:m-0 font-[900] leading-[2.25rem] sm:leading-[2.8125rem] uppercase">
              Your day at the gallery
            </h2>
            <p className="mt-[2rem] text-dark-grey w-full lg:w-[21.875rem] lg:text-[1.375rem] lg:leading-[2rem] text-[1rem] sm:text-[1.125rem] leading-[1.5rem] sm:leading-[1.75rem] font-outfit">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-grid-2 lg:mt-[1.88rem] mt-[2rem] grid grid-cols-1 lg:grid-cols-[39.6875rem,27.8125rem] lg:gap-x-[1.88rem] lg:justify-center">
        <picture>
          <source media="(max-width: 480px)" srcSet={mobileImageGrid2} />
          <source media="(min-width: 1024px)" srcSet={desktopImageGrid2} />

          <img
            src={mobileImageGrid2}
            alt=""
            className="h-[24rem] sm:h-[30rem] w-full lg:h-[45rem] lg:w-[39.6875rem] object-cover"
          />
        </picture>

        <div className="mt-[1rem] lg:mt-0 flex flex-col justify-center">
          <picture>
            <source media="(max-width: 480px)" srcSet={mobileImageGrid3} />
            <source media="(min-width: 1024px)" srcSet={desktopImageGrid3} />
            <img
              src={mobileImageGrid3}
              alt=""
              className="w-full lg:w-[27.8125rem] lg:h-[19.5625rem] object-cover"
            />
          </picture>
          <div className="w-full lg:w-[27.8125rem] lg:h-[23.5625rem] lg:mt-[1.87rem] mt-[1rem] px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-16 pb-12 sm:pb-16 lg:pb-16 bg-almost-black text-white">
            <h2 className="font-[900] font-bigShouldersDisplay leading-[3rem] sm:leading-[3.75rem] text-[3rem] sm:text-[3.75rem] uppercase">
              Come & Be Inspired
            </h2>
            <p className="mt-[1.5rem] lg:mt-[2rem] font-outfit text-[1.125rem] sm:text-[1.375rem] font-[300] leading-[1.75rem] sm:leading-[2rem]">
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
