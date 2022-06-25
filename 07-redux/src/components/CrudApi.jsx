import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Message from './Message';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
	createAction,
	deleteAction,
	noAction,
	readAllAction,
	updateAction,
} from '../actions/crudActions';

const CrudApi = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const { db } = state.crud;

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
					dispatch(readAllAction(res));
					setError(null);
				} else {
					dispatch(noAction());
					setError(res);
				}

				setLoading(false);
			});
	}, [url, dispatch]);

	const createData = (data) => {
		data.id = Date.now();

		let options = {
			body: data,
			headers: { 'Content-Type': 'application/json' },
		};

		api.post(url, options).then((res) => {
			if (!res.err) {
				dispatch(createAction(res));
			} else {
				setError(res);
			}
		});
	};

	const updateData = (data) => {
		let endpoint = `${url}/${data.id}`;

		let options = {
			body: data,
			headers: { 'Content-Type': 'application/json' },
		};

		api.put(endpoint, options).then((res) => {
			if (!res.err) {
				dispatch(updateAction(res));
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
					dispatch(deleteAction(id));
				} else {
					setError(res);
				}
			});
		} else {
			return;
		}
	};

	return (
		<div className='my-page'>
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
