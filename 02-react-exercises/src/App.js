import React from 'react';
import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';
import Modals from './components/Modals';
// import SelectAnidados from './components/SelectAnidados';
import SongSearch from './components/SongSearch';

function App() {
	return (
		<>
			<h1>Ejercicios con React</h1>
			<hr />
			<Modals />
			<hr />
			<ContactForm />
			<hr />
			<strong>Selects Anidados [Componente comentado]</strong>
			{/* <SelectAnidados /> */}
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
