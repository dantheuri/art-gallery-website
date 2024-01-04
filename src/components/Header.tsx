import headerImg from "../assets/desktop/image-hero@2x.jpg";
import arrowRight from "../assets/icon-arrow-right.svg";

const Header = () => {
	return (
		<div>
			<div className="flex relative">
				<div className="bg-almost-black shrink-0 w-[28.125rem] h-[49.9375rem]"></div>
				<div className="w-[33.75rem] shrink-0 h-[50rem]">
					<img src={headerImg} alt="" className="w-full h-full object-cover " />
				</div>
				<div className="absolute left-[57.81rem] top-[11.87rem] w-[21.875rem]">
					<p className="text-[1.375rem] font-outfit text-[#444]">
						The arts in the collection of the Modern Art Gallery all started
						from a spark of inspiration. Will these pieces inspire you? Visit us
						and find out.
					</p>
				</div>
			</div>
			<div></div>
			<div className="absolute left-[10.31rem] font-bigShouldersDisplay leading-[5.5rem] font-[900] uppercase w-[45.125rem] h-[11rem] text-white top-[11.81rem] text-[6rem]">
				<h1 className="">Modern</h1>
				<h1>
					Art Gal<span className="text-almost-black">lery</span>
				</h1>
			</div>

			<span className="flex absolute left-[57.81rem] top-[25.88rem] justify-center items-center first-line font-bigShouldersDisplay bg-almost-black text-white  uppercase w-[12.75rem] h-[4.5rem] shrink-0 ">
				<p className="text-[1.25rem] tracking-[0.22725rem] font-[800]">
					Our location
				</p>
			</span>
			<span className="bg-gold flex justify-center items-center absolute left-[70.56rem] top-[25.88rem] w-[3.5rem] h-[4.5rem]">
				<img src={arrowRight} alt="" />
			</span>
		</div>
	);
};

export default Header;
