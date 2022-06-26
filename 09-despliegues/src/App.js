import ConceptosBasicos from './components/ConceptosBasicos';
// import CrudApi from './components/CrudApi';
// import SongSearch from './components/SongSearch';

function App() {
	return (
		<>
			<h1>React Router - Despliegues</h1>
			<hr />
			<a
				href='https://reactrouter.com/web/guides/quick-start'
				target='_blank'
				rel='noreferrer'
			>
				Documentacion React Router @5.2.0+
			</a>
			<hr />
			<a
				href='https://polite-bienenstitch-e3e6a2.netlify.app/#/'
				target='_blank'
				rel='noreferrer'
			>
				Despliegue con Netlify
			</a>
			{/* <hr />
			<SongSearch />
			<hr />
			<CrudApi /> */}
			<hr />
			<ConceptosBasicos />
		</>
	);
}

export default App;
