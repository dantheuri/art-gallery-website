import mobileImageGrid1 from '../assets/mobile/image-grid-1.jpg'
import mobileImageGrid2 from '../assets/mobile/image-grid-2.jpg'
import mobileImageGrid3 from '../assets/mobile/image-grid-3.jpg'

const Main = () => {
  return (
		<div className="mt-[7.5rem] w-[50rem] justify-center">
			<div className="">
				<div className="grid grid-cols-1 justify-items-center">
					<div className="flex justify-center imageContainer ">
						<img src={mobileImageGrid1} alt="w-[39.6875rem] h-[25rem]" />
					</div>
					<h2 className="font-bigShouldersDisplay w-[21.875rem] text-[3.75rem] font-[900] leading-[3.75rem] uppercase">
						Your day at the gallery
					</h2>
					<p className="mt-[2rem] text-dark-grey w-[21.875rem] text-[1.375rem] leading-[2rem] font-outfit">
						Wander through our distinct collections and find new insights about
						our artists. Dive into the details of their creative process.
					</p>
				</div>
			</div>

			<div className="mt-[1.88rem] grid grid-cols-1 justify-items-center">
				<div>
					<img
						src={mobileImageGrid2}
						alt=""
						className="h-[30rem] object-cover w-[21.4375rem]"
					/>
				</div>
				<div className="mt-[1rem]">
					<div className=" ">
						<img src={mobileImageGrid3} alt="" />
					</div>
					<div className="  w-[21.4375rem] mt-[1rem] pl-[3rem] pr-[2.94rem] pt-[4.06rem] pb-[4rem] bg-almost-black text-white">
						<h2 className="font-[900] font-bigShouldersDisplay leading-[3.75rem] text-[3.75rem] uppercase">
							Come & Be Inspired
						</h2>
						<p className="mt-[1.5rem] font-outfit text-[1.375rem] font-[300] leading-[2rem]">
							We’re excited to welcome you to our gallery and see how our
							collections influence you.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main