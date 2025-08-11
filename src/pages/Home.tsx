import HomeFooter from "../components/home/HomeFooter";
import HomeHeader from "../components/home/HomeHeader";
import HomeMain from "../components/home/HomeMain";

const home = () => {
  return (
    <div className="home min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <HomeHeader />
        <HomeMain />
      </div>
      <HomeFooter />
    </div>
  );
};
export default home;
