import imageGrid1 from '../assets/desktop/image-grid-1.jpg'
import imageGrid2 from '../assets/desktop/image-grid-2.jpg'
import imageGrid3 from '../assets/desktop/image-grid-3.jpg'

const Main = () => {
  return (
		<div className="mt-[11.25rem] px-[10.31rem]">
			<div className="flex gap-[7.81rem]">
				<div className="flex-col justify-iems-center">
					<h2 className="font-bigShouldersDisplay mt-[3.75rem] w-[21.875rem] text-[3.75rem] font-[900] leading-[3.75rem] uppercase">
						Your day at the gallery
					</h2>
					<p className="mt-[2rem] text-dark-grey w-[21.875rem] text-[1.375rem] leading-[2rem] font-outfit">
						Wander through our distinct collections and find new insights about
						our artists. Dive into the details of their creative process.
					</p>
				</div>
				<div className="grid-1-imageContainer w-[39.6875rem] h-[25rem]">
					<img src={imageGrid1} alt="" />
				</div>
			</div>

			<div className="mt-[1.88rem] mb-[50rem] h-[45rem] flex gap-x-[1.88rem]">
				<div>
					<img src={imageGrid2} alt="" className="h-[45rem] object-cover w-[39.6875rem]" />
				</div>
				<div className="">
					<div className="h-[19.5625rem] ">
						<img src={imageGrid3} alt="" />
					</div>
					<div className="w-[27.8125rem] mt-[1.87rem] h-[23.5625rem] pl-[3rem] pr-[2.94rem] pt-[4.06rem] pb-[4rem] bg-almost-black text-white">
						<h2 className="font-[900] font-bigShouldersDisplay leading-[3.75rem] text-[3.75rem] uppercase">
							Come & Be Inspired
						</h2>
						<p className="mt-[2rem] font-outfit text-[1.375rem] font-[300] leading-[2rem]">
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