import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";



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