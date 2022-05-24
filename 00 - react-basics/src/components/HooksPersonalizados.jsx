import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados() {
	let url = 'https://pokeapi.co/api/v2/pokemon/';
	url = 'https://jsonplaceholder.typicode.com/users/';
	// console.log(useFetch());

	let { data, isPending, error } = useFetch(url);

	return (
		<>
			<h2>Hooks Personalizados</h2>
			<h3>{JSON.stringify(isPending)}</h3>
			<h3>
				<mark>{JSON.stringify(error)}</mark>
			</h3>
			<h3>
				<pre>
					<code>{JSON.stringify(data, undefined, 2)}</code>
				</pre>
			</h3>
		</>
	);
}
