import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Apropos from '../pages/Apropos/Apropos';
import Error from '../pages/404/404';
import Logement from '../pages/Logement/Logement';
import Footer from './Footer/Footer';

function Routers() {

	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		const url = '/logements.json';
		axios
			.get(url)
			.then((res) => setData(res.data))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));

	}, []);
	(error) && <span> Ouups! il y a une erreur!</span>;

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home homesList={data} loading={isLoading} />
				</Route>
				<Route path='/apropos' >
					<Apropos />
				</Route>
				<Route path='/logement/:logId'>
					<Logement locationList={data} />
				</Route>
				<Route >
					<Error />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default Routers; 