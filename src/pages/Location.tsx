import LocationHeader from "../components/location/LocationHeader";
import LocationMain from "../components/location/LocationMain";
import LocationFooter from "../components/location/LocationFooter";

const Location = () => {
	return (
		<div className=" grid grid-cols-1 justify-items-center">
			<LocationHeader />
			<LocationMain />
			<LocationFooter />
		</div>
	);
};

export default Location;
