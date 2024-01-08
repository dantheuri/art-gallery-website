import logoLight from "../assets/logo-light.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
	return (
		<div className="mt-[7.5rem] grid grid-cols-1 w-[21.4375rem] py-[5rem] bg-almost-black">
			<div className="">
				<img
					src={logoLight}
					alt=""
					className="object-contain w-[10rem] h-[3.625rem]"
				/>
			</div>
			<div className="">
				<p className="leading-[1.75rem] font-[300] text-[1.125rem] font-outfit text-white">
					The Modern Art Gallery is free to all visitors and open seven days a
					week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
				</p>
			</div>

			<div className="flex gap-x-[1.25rem] h-[1.25rem] w-[6.25rem]">
				<img src={facebookIcon} alt="" />
				<img src={instagramIcon} alt="" />
				<img src={twitterIcon} alt="" />
			</div>
		</div>
	);
};

export default Footer;
