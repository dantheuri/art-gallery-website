const LocationMain = () => {
	return (
		<main className="bg-almost-black text-white px-4 pt-[3rem] pb-[3.5rem] max-w-[23.4375rem] lg:max-w-none lg:w-full">
			<div>
				<h1 className="uppercase  font-bigShouldersDisplay text-[3.125rem] font-[900]">
					Our location
				</h1>
			</div>
			<div className="mt-[3rem] grid grid-cols-1 gap-y-[1.25rem]">
				<h3 className="text-gold font-bigShouldersDisplay text-[2rem] font-[900]">
					99 King Street
				</h3>
				<div className="font-outfit text-[1.125rem] font-[300]">
					<p>Newport</p>
					<p>RI 02840</p>
					<p>United States of America</p>
				</div>
				<p className="font-outfit">
					Our newly opened gallery is located near the Edward King House on 99
					King Street, the Modern Art Gallery is free to all visitors and open
					seven days a week from 8am to 9pm.
				</p>
			</div>
		</main>
	);
};

export default LocationMain;
