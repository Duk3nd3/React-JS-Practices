import React from 'react';
import Home from '../pages/Home';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Error404 from '../pages/Error404';
import { Switch } from 'react-router-dom';
import MenuConceptos from './MenuConceptos';
import { Route } from 'react-router-dom';

const ConceptosBasicos = () => {
	return (
		<div>
			<h2>Conceptos Basicos</h2>
			<MenuConceptos />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/acerca' component={Acerca} />
				<Route exact path='/contacto' component={Contacto} />
				<Route path='*' component={Error404} />
			</Switch>
		</div>
	);
};

export default ConceptosBasicos;

//REFACTORIZACION DEL CODIGO -DEJO COPIA DE LO QUE HABIA ANTES-

// return (
// 	<div>
// 		<h2>Conceptos Basicos</h2>
// 		<Router>
// 			<Route exact path='/'>
// 				<h3>Home</h3>
// 				<p>Bienvenid@s al tema de las rutas en React</p>
// 			</Route>
// 			<Route exact path='/acerca'>
// 				<Acerca />
// 				<p>
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 					Consequuntur commodi alias cupiditate accusantium earum atque minus
// 					sunt iste iure porro doloremque corrupti nisi laudantium,
// 					necessitatibus dolore odit amet! Earum, distinctio!
// 				</p>
// 			</Route>
// 			<Route exact path='/contacto' component={Contacto} />
// 			<Route
// 				exact
// 				path='/contacto'
// 				children={
// 					<>
// 						<Contacto />
// 						<p>
// 							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
// 							molestiae culpa saepe eligendi quod excepturi mollitia aperiam
// 							nostrum veniam odio labore ab distinctio iure, non magni soluta
// 							vitae inventore nisi.
// 						</p>
// 					</>
// 				}
// 			/>
// 		</Router>
// 	</div>
// );
// };
