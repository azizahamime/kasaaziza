import React, { useState, Fragment } from 'react';
import nextIcon from '../../assets/next.svg';
import prevIcon from '../../assets/prev.svg';


export default function Carrousel({ images, title }) {
	const length = images.length;
	const [current, setCurrent] = useState(0);

	function next() {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}
	function prev() {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	return (
		<div className='container'>
			<div className='slider'>
				<img src={images[current]} alt={title} className='img-principale' />
				{length > 1 && (
					<Fragment>
						<img src={nextIcon} alt="next-chevron" className='nextIcon' onClick={next} />
						<img src={prevIcon} alt="prev-chevron" className='prevIcon' onClick={prev} />
						<div className="position"> {current + 1}/{length}</div>
					</Fragment>
				)}
			</div>
		</div>
	);
}