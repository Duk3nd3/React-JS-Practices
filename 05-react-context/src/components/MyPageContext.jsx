import React, { useState } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import FooterContext from './FooterContext';
import HeaderContext from './HeaderContext';
import MainContext from './MainContext';

const initialLanguage = 'es';
const initialAuth = null;

const translations = {
	es: {
		headerTitle: 'Mi aplicacion CON Context API',
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
		headerTitle: 'My application WITH Context API',
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

const MyPageContext = () => {
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);
	const [auth, setAuth] = useState(initialAuth);

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
			<ThemeProvider>
				<HeaderContext
					texts={texts}
					handleLanguage={handleLanguage}
					auth={auth}
					handleAuth={handleAuth}
				/>
				<MainContext texts={texts} auth={auth} />
				<FooterContext texts={texts} />
			</ThemeProvider>
		</div>
	);
};

export default MyPageContext;
