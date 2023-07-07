import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo-kasa.svg';

function Header() {
	function active(e) {
		const links = document.querySelectorAll('.nav-link');
		const elemActive = e.target;
		elemActive.classList.add('active');
		links.forEach(el => el !== elemActive ? el.classList.remove('active') : null);
	}
	return (
		<header>
			<div className='container'>
				<Link to='/' >
					<img src={logo} alt='logo' className=' nav-link logo' onClick={(e) => active(e)} />
				</Link>
				<nav>
					<Link to='/' className='nav-link home' onClick={(e) => active(e)}> Accueil </Link>
					<Link to='/apropos' className='nav-link' onClick={(e) => active(e)}> A propos </Link>
				</nav>
			</div>
		</header>
	);
}
export default Header;