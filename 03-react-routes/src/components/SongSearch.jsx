import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import SongDetail from './SongDetail';
import SongForm from './SongForm';
import { helpHttp } from '../helpers/helpHttp';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import Error404 from '../pages/Error404';

const SongSearch = () => {
	const [search, setSearch] = useState(null);
	const [lyric, setLyric] = useState(null);
	const [bio, setBio] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (search === null) return;

		const fetchData = async () => {
			const { artist, song } = search;

			let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
			let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

			// console.log(artistUrl, songUrl);

			setLoading(true);

			const [artistRes, songRes] = await Promise.all([
				helpHttp().get(artistUrl),
				helpHttp().get(songUrl, {
					headers: {
						'Content-Type': '/application/json',
					},
				}),
			]);

			// console.log(artistRes, songRes);

			setBio(artistRes);
			setLyric(songRes);
			setLoading(false);
		};

		fetchData();
	}, [search]);

	const handleSearch = (data) => {
		// console.log(data);
		setSearch(data);
	};

	return (
		<div>
			<HashRouter basename='canciones'>
				<header>
					<h2>Song Search</h2>
					<Link to='/'>Home</Link>
				</header>
				{loading && <Loader />}
				<article className='grid-1-3'>
					<Switch>
						<Route exact path='/'>
							<SongForm handleSearch={handleSearch} />
							<h2>Tabla de Canciones</h2>
							{search && !loading && (
								<SongDetail search={search} lyric={lyric} bio={bio} />
							)}
						</Route>
						<Route exact path='/canciones/:id'>
							<h2>Pagina de cancion</h2>
						</Route>
						<Route path='*' children={<Error404 />} />
					</Switch>
				</article>
			</HashRouter>
		</div>
	);
};

export default SongSearch;
