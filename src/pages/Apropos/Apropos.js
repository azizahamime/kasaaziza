import React, { Fragment } from 'react';
import Banner from '../../components/Banner/Banner';
import dataAbout from './About.json';
import Collapse from '../../components/Collapse/Collapse';

function Apropos() {
	return (
		<Fragment>
			<Banner location='apropos' />
			<section>
				<div className='container'>
					<div className='about'>
						{dataAbout.map((data, index) => (
							<Collapse key={index} title={data.title} >
								<p> {data.description}</p>
							</Collapse>
						))}
					</div>
				</div>
			</section>

		</Fragment>
	);
}
export default Apropos;
