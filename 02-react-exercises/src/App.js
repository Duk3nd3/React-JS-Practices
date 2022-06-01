import React from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';
import SelectAnidados from './components/SelectAnidados';
import SongSearch from './components/SongSearch';

function App() {
	return (
		<>
			<h1>Ejercicios con React</h1>
			<hr />
			<SelectAnidados />
			<hr />
			<SongSearch />
			<hr />
			<CrudApi />
			<hr />
			<CrudApp />
		</>
	);
}

export default App;
