
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Rating from '../../components/Rating/Rating';
import Tag from '../../components/Tags/Tag';
import Collapse from '../../components/Collapse/Collapse';
import Error from '../404/404';


export default function Logement(props) {
	const { logId } = useParams();
	const location = props.locationList.filter((el) => el.id === logId).shift();
	if (location === undefined) {
		return <Error />;
	}
	return (
		<Fragment>
			<Carrousel images={location.pictures} title={location.title} />
			<div className='information'>
				<div className='container'>
					<div className='house'>
						<h1 className='house-title'> {location.title}</h1>
						<p className='house-location'> {location.location}</p>
						<Tag tags={location.tags} />
					</div>
					<div className='host'>
						<div className='host-infos'>
							<p className='host-infos__name'>{location.host.name}</p>
							<img src={location.host.picture} alt={location.host.name} className="host-infos__photo" />
						</div>
						<Rating rating={location.rating} />
					</div>

				</div>
				<div className='content'>
					<div className='container'>
						<Collapse title='Description' >
							<div> {location.description}</div>
						</Collapse>
						<Collapse title='Équipements'>
							<ul>
								{location.equipments.map((el, index) => (
									<li key={index}>{el}</li>
								))}
							</ul>
						</Collapse>

					</div>
				</div>
			</div>
		</Fragment>
	);


}