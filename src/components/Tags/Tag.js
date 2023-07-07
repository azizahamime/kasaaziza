import React, { Fragment } from 'react';

export default function Tag({ tags }) {
	return (
		<Fragment>
			<ul className='tags'>
				{tags.map(tag => (
					<li key={tag}> {tag}</li>
				))}
			</ul>
		</Fragment>
	);
}