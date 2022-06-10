import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Message from './Message';
import Loader from './Loader';
import { HashRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Error404 from '../pages/Error404';

const CrudApi = () => {
	const [db, setDb] = useState(null);
	const [dataToEdit, setDataToEdit] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let url = 'http://localhost:5000/santos';
	let api = helpHttp();

	useEffect(() => {
		setLoading(true);
		helpHttp()
			.get(url)
			.then((res) => {
				if (!res.err) {
					setDb(res);
					setError(null);
				} else {
					setDb(null);
					setError(res);
				}

				setLoading(false);
			});
	}, [url]);

	const createData = (data) => {
		data.id = Date.now();

		let options = {
			body: data,
			headers: { 'Content-Type': 'application/json' },
		};

		api.post(url, options).then((res) => {
			// console.log(res);

			if (!res.err) {
				setDb([...db, res]);
			} else {
				setError(res);
			}
		});
	};

	const updateData = (data) => {
		let endpoint = `${url}/${data.id}`;
		// console.log(endpoint);

		let options = {
			body: data,
			headers: { 'Content-Type': 'application/json' },
		};

		api.put(endpoint, options).then((res) => {
			if (!res.err) {
				let newData = db.map((el) => (el.id === data.id ? data : el));
				setDb(newData);
			} else {
				setError(res);
			}
		});
	};

	const deleteData = (id) => {
		let isDelete = window.confirm(`are you sure? Deleting ID '${id}'`);

		if (isDelete) {
			let endpoint = `${url}/${id}`;

			let options = {
				headers: { 'Content-Type': 'application/json' },
			};

			api.del(endpoint, options).then((res) => {
				if (!res.err) {
					let newData = db.filter((el) => el.id !== id);
					setDb(newData);
				} else {
					setError(res);
				}
			});
		} else {
			return;
		}
	};

	return (
		<div>
			<HashRouter basename='santos'>
				<header>
					<h2>CRUD API con Rutas</h2>
					<nav>
						<NavLink to='/' activeClassName='active'>
							Santos
						</NavLink>
						<NavLink to='/agregar' activeClassName='active'>
							Agregar
						</NavLink>
					</nav>
				</header>
				<Switch>
					<Route exact path='/'>
						<h2>Home de Santos</h2>
					</Route>
					<Route exact path='/agregar'>
						<h2>Agregar Santos</h2>
					</Route>
					<Route exact path='/editar/:id'>
						<h2>Editar Santos</h2>
					</Route>
					<Route path='*' children={<Error404 />} />
				</Switch>
			</HashRouter>
			<h2>CRUD Api </h2>
			<article className='grid-1-2'>
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				{loading && <Loader />}
				{error && (
					<Message
						msg={`Error ${error.status}: ${error.statusText}`}
						bgColor='#dc3545'
					/>
				)}
				{db && (
					<CrudTable
						data={db}
						setDataToEdit={setDataToEdit}
						deleteData={deleteData}
					/>
				)}
			</article>
		</div>
	);
};

export default CrudApi;
