import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';

const ConceptosBasicos = () => {
	return (
		<div>
			<h2>Conceptos Basicos</h2>
			<Router>
				<Route exact path='/'>
					<h3>Home</h3>
					<p>Bienvenid@s al tema de las rutas en React</p>
				</Route>
				<Route exact path='/acerca' component={Acerca} />
				{/* <Route exact path='/contacto' component={Contacto} /> */}
				<Route exact path='/contacto' children={<Contacto />} />
			</Router>
		</div>
	);
};

export default ConceptosBasicos;
