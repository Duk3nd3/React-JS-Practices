import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

// const PrivateRoute = (props) => {
// 	return (
// 		<Route exact={props.exact} path={props.path} component={props.component} />
// 	);
// };

// const PrivateRoute = (props) => {
// 	return <Route {...props} />;
// };

//Simular Autenticacion (Si invertimos el valor de auth, podremos ingresar a Dashboard o ser redireccionados siempre a Login)
let auth;
auth = null;
auth = true;

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		// <Route {...rest}>{auth ? <component /> : <Redirect to='/login' />}</Route>
		<Route {...rest}>{auth ? <Component /> : <Redirect to='/login' />}</Route>
	);
};

export default PrivateRoute;
