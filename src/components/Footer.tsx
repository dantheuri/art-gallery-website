import logoLight from "../assets/logo-light.svg";

const Footer = () => {
	return (
		<div className="mt-[11.25rem] pl-[10.31rem] pr-[34.06rem] py-[5rem] bg-almost-black h-[15.25rem]">
			<div className="">
				<img src={logoLight} alt="" />
			</div>
			<p>
				Modern Art Gallery The Modern Art Gallery is free to all visitors and
				open seven days a week from 8am to 9pm. Find us at 99 King Street,
				Newport, USA.
			</p>
		</div>
	);
};

export default Footer;
