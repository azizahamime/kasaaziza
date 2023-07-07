import React from 'react';
import PropTypes from 'prop-types';
import bannerHome from '../../assets/banner-home.png';
import bannerApropos from '../../assets/banner-apropos.png';

function Banner({ location }) {

	if (location === 'home') {
		return (
			<div className='container'>
				<div className='banner' style={{ backgroundImage: `url(${bannerHome})` }} >
					<h4>Chez vous, partout et ailleurs</h4>
				</div>
			</div>
		);
	}
	if (location === 'apropos') {
		return (
			<div className='container'>
				<div className='banner' style={{ backgroundImage: `url(${bannerApropos})` }} >
				</div>
			</div >
		);
	}
}

Banner.propTypes = {
	location: PropTypes.string,
};

export default Banner;