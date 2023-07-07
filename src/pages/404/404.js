import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
	return (
		<main id='main-error'>
			<div className='container'>
				<h1> 404 </h1>
				<p>Oups! La page que vous demandez n&apos;existe pas.</p>
				<p className='for-home'><Link to='/'>Retourner sur la page d&apos;accueil</Link></p>
			</div>
		</main>
	);
}

export default Error;