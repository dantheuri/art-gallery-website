const LocationMain = () => {
	return (
		<main className="bg-almost-black text-white px-4 grid grid-cols-1 lg:grid-cols-2 lg:px-[10.31rem] pt-[3rem] lg:pt-[6.5rem] pb-[3.5rem] lg:pb-[8rem] max-w-[23.4375rem] lg:max-w-none lg:w-full">
			<div className="uppercase font-bigShouldersDisplay lg:w-[21.875rem] lg:leading-[4.375rem] text-[4.375rem] font-[900]">
				<h1>Our location</h1>
			</div>
			<div className="mt-[3rem] lg:mt-0 grid grid-cols-1 gap-y-[1.25rem]">
				<h3 className="text-gold font-bigShouldersDisplay text-[2rem] lg:text-[2.25rem] font-[900]">
					99 King Street
				</h3>
				<div className="font-outfit text-[1.125rem] lg:text-[1.375rem] font-[300]">
					<p>Newport</p>
					<p>RI 02840</p>
					<p>United States of America</p>
				</div>
				<div className="lg:w-[33.75rem] lg:text-[1.375rem]">
					<p className="font-outfit">
						Our newly opened gallery is located near the Edward King House on 99
						King Street, the Modern Art Gallery is free to all visitors and open
						seven days a week from 8am to 9pm.
					</p>
				</div>
			</div>
		</main>
	);
};

export default LocationMain;
