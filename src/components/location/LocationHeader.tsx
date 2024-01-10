import mobileLocationImg from '../../assets/mobile/image-map.png';
import desktopLocationImg from '../../assets/desktop/image-map.png';


import arrowLeft from '../../assets/icon-arrow-left.svg';
import {Link} from 'react-router-dom'

const LocationHeader = () => {
  return (
		<header className="max-w-[23.4375rem] lg:max-w-none lg:w-full">
			<Link to="/">
				<button className="backHomeButton flex absolute">
					<div className="leftArrowContainer flex items-center justify-center bg-gold w-[3.5rem] h-[4.5rem]">
						<img src={arrowLeft} alt="" className="" />
					</div>
					<div className="backHomeButtonText font-bigShouldersDisplay font-[800] text-[1.25rem] tracking-[0.22725rem] flex items-center justify-center bg-almost-black w-[13rem] h-[4.5rem]">
						<h3 className="text-white"> Back to Home</h3>
					</div>
				</button>
			</Link>

			<picture>
				<source media="(max-width: 480px)" srcSet={mobileLocationImg} />
        
          <source media="(min-width: 1024px)" srcSet={desktopLocationImg} />
       
				<img
					src={mobileLocationImg}
					alt=""
					className="w-[75.45706rem] lg:w-full"
				/>
			</picture>
		</header>
	);
}

export default LocationHeader