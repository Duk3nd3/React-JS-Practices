import React, { useState, useEffect } from 'react';

export default function RelojHooks() {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<h2>Reloj con Hooks</h2>
			{visible && <Reloj />}
			<button onClick={() => setVisible(true)}>Mostrar</button>
			<button onClick={() => setVisible(false)}>Ocultar</button>
		</>
	);
}

function Reloj() {
	const [hora, setHora] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		// console.log('La hora se Actualiza');
	}, [hora]);

	useEffect(() => {
		// console.log('Componente Reloj INICIADO');
		const segundero = setInterval(() => {
			setHora(new Date().toLocaleTimeString());
		}, 1000);
		return () => {
			// console.log('Componente Reloj Desmontado');
			clearInterval(segundero);
		};
	}, []);

	return <h3>{hora}</h3>;
}
