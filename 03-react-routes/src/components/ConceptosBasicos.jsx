import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const ConceptosBasicos = () => {
	return (
		<div>
			<h2>Conceptos Basicos</h2>
			<Router>
				<Route exact path='/'>
					<h3>Home</h3>
					<p>Bienvenid@s al tema de las rutas en React</p>
				</Route>
				<Route exact path='/acerca'>
					<h3>Acerca</h3>
				</Route>
				<Route exact path='/contacto'>
					<h3>Contacto</h3>
				</Route>
			</Router>
		</div>
	);
};

export default ConceptosBasicos;
