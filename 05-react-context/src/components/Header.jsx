import React from 'react';

const Header = ({ theme, handleTheme }) => {
	return (
		<header className={theme}>
			<h2>Mi aplicacion SIN Context API</h2>
			<h3>Mi Cabecera</h3>
			<select name='landguage'>
				<option value='es'>ES</option>
				<option value='en'>EN</option>
			</select>
			<input
				type='radio'
				name='theme'
				id='light'
				onClick={handleTheme}
				value='light'
			/>
			<label htmlFor='light'>Claro</label>
			<input
				type='radio'
				name='theme'
				id='dark'
				onClick={handleTheme}
				value='dark'
			/>
			<label htmlFor='dark'>Oscuro</label>
			<button>Iniciar Sesion</button>
		</header>
	);
};

export default Header;
