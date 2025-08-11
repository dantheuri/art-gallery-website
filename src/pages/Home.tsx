import HomeFooter from "../components/home/HomeFooter";
import HomeHeader from "../components/home/HomeHeader";
import HomeMain from "../components/home/HomeMain";

const home = () => {
  return (
    <div className="home min-h-screen">
      <HomeHeader />
      <HomeMain />

      <HomeFooter />
    </div>
  );
};
export default home;
