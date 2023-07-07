import React from 'react';

export default function Card({ title, cover }) {
	return (

		<div className="card" >
			<img src={cover} alt={title} className='card-image' />
			<div className='overlay'>
				<h4 className='card-title'>{title}</h4>
			</div>
		</div>

	);
}