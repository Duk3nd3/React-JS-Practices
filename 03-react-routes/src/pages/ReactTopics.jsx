import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Topic = () => {
	let { topic } = useParams();

	return (
		<div>
			<h4>{topic}</h4>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex et autem
				officiis qui mollitia tempore culpa a explicabo aliquid libero
				laboriosam, quos soluta minus animi? Ea corrupti quasi quod minus.
			</p>
		</div>
	);
};

/*
'PATH' nos permite construir rutas relativas <Route>, mientras que 'URL' nos permite construir enlaces relativos <Link> o <NavLink>.
*/

const ReactTopics = () => {
	let { path, url } = useRouteMatch();

	return (
		<div>
			<h3>Temas de React</h3>
			<ul>
				<li>
					<Link to={`${url}/jsx`}>JSX</Link>
				</li>
				<li>
					<Link to={`${url}/props`}>Props</Link>
				</li>
				<li>
					<Link to={`${url}/estado`}>Estado</Link>
				</li>
				<li>
					<Link to={`${url}/componentes`}>Componentes</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path={path}>
					<h4>Elige un tema de React</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
						id praesentium accusamus consectetur perspiciatis explicabo velit,
						officia vel quas! Provident ab eum inventore quibusdam hic pariatur
						maiores quia, cum sint
					</p>
				</Route>
				<Route path={`${path}/:topic`} component={Topic} />
			</Switch>
		</div>
	);
};

export default ReactTopics;
