import logoDark from '../../assets/logo-dark.svg'
import facebookLogo from '../../assets/icon-facebook.svg'
import instagramLogo from '../../assets/icon-instagram.svg'
import twitterLogo from '../../assets/icon-twitter.svg'

const LocationFooter = () => {
  return (
		<footer className="px-[2rem] py-[3rem] bg-gold grid grid-cols-1 gap-y-[2.38rem] max-w-[23.4375rem] lg:max-w-none lg:w-full lg:px-[10.31rem]">
			<img src={logoDark} alt="" className="w-[6.87813rem] h-[2.5rem]" />
			<p className="text-almost-black font-outfit leading-[1.625rem]">
				The Modern Art Gallery is free to all visitors and open seven days a
				week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
			</p>
			<div className="flex gap-x-[1rem]">
				<img src={facebookLogo} alt="" />
				<img src={instagramLogo} alt="" />
				<img src={twitterLogo} alt="" />
			</div>
		</footer>
	);
}

export default LocationFooter