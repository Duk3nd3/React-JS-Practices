import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import React, { useState } from 'react';

const initialDb = [
	{
		id: 1,
		name: 'Seiya',
		constellation: 'Pegasus',
	},
	{
		id: 2,
		name: 'Shiryu',
		constellation: 'Dragon',
	},
	{
		id: 3,
		name: 'Hyoga',
		constellation: 'Cisne',
	},
	{
		id: 4,
		name: 'Shun',
		constellation: 'Andromeda',
	},
	{
		id: 5,
		name: 'Ikki',
		constellation: 'Phoenix',
	},
];

const CrudApp = () => {
	const [db, setDb] = useState(initialDb);

	return (
		<div>
			<h2>CRUD App</h2>
			<CrudForm />
			<CrudTable data={db} />
		</div>
	);
};

export default CrudApp;
