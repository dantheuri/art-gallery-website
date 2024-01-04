import imageGrid1 from '../assets/desktop/image-grid-1@2x.jpg'

const Main = () => {
  return (
		<div className="mt-[11.25rem] px-[10.31rem]">
			<div className="flex gap-[7.81rem]">
				<div className="flex-col justify-iems-center">
					<h2 className="font-bigShouldersDisplay  mt-[3.75rem] w-[21.875rem] text-[3.75rem] font-[900] leading-[3.75rem] uppercase">Your day at the gallery</h2>
					<p className="mt-[2rem] w-[21.875rem] text-[1.375rem] leading-[2rem] font-outfit">
						Wander through our distinct collections and find new insights about
						our artists. Dive into the details of their creative process.
					</p>
				</div>
				<div className="grid-1-imageContainer w-[39.6875rem] h-[25rem]">
					<img src={imageGrid1} alt="" />
				</div>
			</div>

			<p>
				Come &amp; be inspired We’re excited to welcome you to our gallery and
				see how our collections influence you.
			</p>
		</div>
	);
}

export default Main