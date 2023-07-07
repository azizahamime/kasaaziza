import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner.js';
import Card from '../../components/Card/Card';

export default function Home({ homesList, loading }) {

	return (
		<Fragment>
			<Banner location='home' />
			<section>
				<div className='container'>
					<div className='gallery'>
						{loading ? (
							<div> ... isLoading</div>
						) : (
							homesList.map(home => (
								<Link key={home.id} to={`/logement/${home.id}`}>
									<Card title={home.title} cover={home.cover} />
								</Link>
							))
						)}
					</div>
				</div>
			</section>
		</Fragment>
	);
}
