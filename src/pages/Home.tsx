import Footer from "../components/home/HomeFooter";
import Header from "../components/home/HomeHeader";
import Main from "../components/home/HomeMain";



const home = () => {
  return (
		<div className="home lg:justify-items-start grid grid-cols-1 justify-items-center">
			<Header /> 
			<Main /> 
			<Footer /> 
		</div>
	);
}

export default home