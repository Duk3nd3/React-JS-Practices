import React, { useEffect, useState } from 'react';

function Pokemon({ avatar, name }) {
	return (
		<figure>
			<img src={avatar} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default function AjaxHooks() {
	const [pokemons, setPokemons] = useState([]);

	// useEffect(() => {
	// 	let url = 'https://pokeapi.co/api/v2/pokemon/';
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			json.results.forEach((el) => {
	// 				fetch(el.url)
	// 					.then((res) => res.json())
	// 					.then((json) => {
	// 						let pokemon = {
	// 							id: json.id,
	// 							name: json.name,
	// 							avatar: json.sprites.front_default,
	// 						};

	// 						setPokemons((pokemons) => [...pokemons, pokemon]);
	// 					});
	// 			});
	// 		});
	// }, []);

	//FUNCION ASINCRONA
	useEffect(() => {
		const getPokemons = async (url) => {
			let res = await fetch(url),
				json = await res.json();
			// console.log(json)

			json.results.forEach(async (el) => {
				let res = await fetch(el.url),
					json = await res.json();

				//console.log(on)
				let pokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default,
				};

				setPokemons((pokemons) => [...pokemons, pokemon]);
			});
		};
		getPokemons('https://pokeapi.co/api/v2/pokemon/');
	}, []);

	return (
		<>
			<h2>Peticionaes Asincronas en Hooks</h2>
			{pokemons.lenght === 0 ? <h3>Cargando...</h3> : pokemons.map((el) => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
		</>
	);
}
