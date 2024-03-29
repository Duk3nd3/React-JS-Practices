import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = 'light';
const initialLanguage = 'es';
const initialAuth = null;

const translations = {
	es: {
		headerTitle: 'Mi aplicacion SIN Context API',
		headerSubtitle: 'Mi cabecera',
		headerLight: 'Claro',
		headerDark: 'Oscuro',
		buttonLogin: 'Iniciar Sesion',
		buttonLogout: 'Cerrar Sesion',
		mainWelcome: 'Bienvenido/a invitado/a',
		mainHello: 'Hola Usuario/a',
		mainContent: 'Mi contenido principal',
		footerTitle: 'Mi pie de pagina',
	},
	en: {
		headerTitle: 'My application WITHOUT Context API',
		headerSubtitle: 'My header',
		headerLight: 'Light',
		headerDark: 'Dark',
		buttonLogin: 'Login',
		buttonLogout: 'Logout',
		mainWelcome: 'Welcome guest',
		mainHello: 'Hello User',
		mainContent: 'My main content',
		footerTitle: 'My footer',
	},
};

const MyPage = () => {
	const [theme, setTheme] = useState(initialTheme);
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);
	const [auth, setAuth] = useState(initialAuth);

	const handleTheme = (e) => {
		if (e.target.value === 'light') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	const handleLanguage = (e) => {
		if (e.target.value === 'es') {
			setLanguage('es');
			setTexts(translations.es);
		} else {
			setLanguage('en');
			setTexts(translations.en);
		}
	};

	const handleAuth = (e) => {
		if (auth) {
			setAuth(null);
		} else {
			setAuth(true);
		}
	};

	return (
		<div className='my-page'>
			<Header
				theme={theme}
				texts={texts}
				handleTheme={handleTheme}
				handleLanguage={handleLanguage}
				auth={auth}
				handleAuth={handleAuth}
			/>
			<Main theme={theme} texts={texts} auth={auth} />
			<Footer theme={theme} texts={texts} />
		</div>
	);
};

export default MyPage;
