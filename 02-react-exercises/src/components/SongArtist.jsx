import React from 'react';

const songArtist = ({ artist }) => {
	return (
		<section>
			<h3>{artist.strArtist}</h3>
			<img src={artist.strArtistThumb} alt={artist.strArtist} />
			<p>
				{artist.intBornYear} - {artist.intDieYear || 'Presente'}
			</p>
			<p>{artist.strCountry}</p>
			<p>
				{artist.strGenre} - {artist.strStyle}
			</p>
			<a
				href={`http://${artist.strWebsite}`}
				target='_blank'
				rel='noopener noreferrer'
			>
				Sitio Web Oficial
			</a>
			<p>{artist.strBiographyEN}</p>
		</section>
	);
};

export default songArtist;
