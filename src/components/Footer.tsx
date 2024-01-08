import logoLight from "../assets/logo-light.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
	return (
		<footer className="footer mt-[7.5rem] grid grid-cols-1 gap-y-[2.38rem] px-[2rem] py-[3rem] bg-almost-black">
			<div className="footer-logo">
				<img
					src={logoLight}
					alt=""
					className="object-contain w-[6.87813rem] h-[2.5rem]"
				/>
			</div>
			<div className="">
				<p className="leading-[1.625rem] font-[300] text-[1rem] font-outfit text-white">
					The Modern Art Gallery is free to all visitors and open seven days a
					week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
				</p>
			</div>

			<div className="flex gap-x-[1.25rem] h-[1.25rem] w-full">
				<img src={facebookIcon} alt="" />
				<img src={instagramIcon} alt="" />
				<img src={twitterIcon} alt="" />
			</div>
		</footer>
	);
};

export default Footer;
