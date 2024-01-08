import headerImg from "../assets/mobile/image-hero.jpg";
import arrowRight from "../assets/icon-arrow-right.svg";

const Header = () => {
	return (
		<header className="header flex-cols relative">
			<div className="bg-almost-black shrink-0 hidden lg:block"></div>
			<div className="w-full shrink-0">
				<img src={headerImg} alt="" className="w-full h-full object-cover " />
			</div>
			<div className="font-bigShouldersDisplay px-[1rem] leading-[3.4375rem] font-[900] uppercase w-[21.4375rem] mt-[2rem] text-almost-black text-[3.75rem]">
				<h1 className="">Modern Art Gallery</h1>
			</div>
			<div className=" px-[1rem] w-[21.875rem] mt-[2rem]">
				<p className="text-[1.375rem] leading-[2rem] font-outfit text-dark-grey">
					The arts in the collection of the Modern Art Gallery all started from
					a spark of inspiration. Will these pieces inspire you? Visit us and
					find out.
				</p>
			</div>
			<div className="locationButton px-[1rem] mt-[2rem] flex">
				<span className="flex justify-center items-center font-bigShouldersDisplay bg-almost-black text-white  uppercase w-[12.75rem] h-[4.5rem] shrink-0 ">
					<p className="text-[1.25rem] tracking-[0.22725rem] font-[800]">
						Our location
					</p>
				</span>
				<span className="bg-gold flex justify-center items-center w-[3.5rem] h-[4.5rem]">
					<img src={arrowRight} alt="" />
				</span>
			</div>
		</header>
	);
};

export default Header;
