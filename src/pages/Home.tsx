import headerImg from '../assets/desktop/image-hero@2x.jpg'

const home = () => {
  return (
		<div>
			<div className="flex relative">
				<div className="bg-almost-black shrink-0 w-[28.125rem] h-[49.9375rem]"></div>
				<div className="w-[50.75rem] shrink-0 h-[50rem]">
					<img src={headerImg} alt="" className="w-full h-full object-cover " />
				</div>
				<div>
					<p>
						The arts in the collection of the Modern Art Gallery all started
						from a spark of inspiration. Will these pieces inspire you? Visit us
						and find out.
					</p>
				</div>
			</div>
			<div></div>
			<div className="absolute font-bigShouldersDisplay leading-[5.5rem] font-[600] uppercase w-[45.125rem] h-[11rem] text-white top-[11.81rem] left-[3.31rem] text-[5.6rem]">
				<h1 className="">Modern</h1>
				<h1>
					Art Gal<span className="text-almost-black">lery</span>
				</h1>
			</div>
			<div className="flex justify-center items-center first-line font-bigShouldersDisplay absolute bg-almost-black text-white left-[75.81rem] uppercase w-[12.75rem] h-[4.5rem] shrink-0 top-[25.88rem]">
				<span className="text-[1.25rem] font-[600]">Our location</span>
			</div>
			<div>Your day at the gallery</div>
			<p>
				Wander through our distinct collections and find new insights about our
				artists. Dive into the details of their creative process. Come &amp; be
				inspired We’re excited to welcome you to our gallery and see how our
				collections influence you. Modern Art Gallery The Modern Art Gallery is
				free to all visitors and open seven days a week from 8am to 9pm. Find us
				at 99 King Street, Newport, USA.
			</p>
		</div>
	);
}

export default home