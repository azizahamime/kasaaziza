import React from 'react';
import logo from '../../assets/logo-footer.svg';

function Footer() {
	return (
		<footer>
			<div className='container'>
				<img src={logo} alt='footer-logo' />
				<p> &copy; 2020 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
}
export default Footer;