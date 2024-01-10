import HomeFooter from "../components/home/HomeFooter";
import HomeHeader from "../components/home/HomeHeader";
import HomeMain from "../components/home/HomeMain";



const home = () => {
  return (
		<div className="home lg:justify-items-start grid grid-cols-1 justify-items-center">
			<HomeHeader /> 
			<HomeMain /> 
			<HomeFooter /> 
		</div>
	);
}

export default home