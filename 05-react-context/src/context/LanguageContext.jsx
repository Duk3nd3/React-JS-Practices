import { createContext, useState } from 'react';

const LanguageContext = createContext();

const initialLanguage = 'es';

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

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);

	const handleLanguage = (e) => {
		if (e.target.value === 'es') {
			setLanguage('es');
			setTexts(translations.es);
		} else {
			setLanguage('en');
			setTexts(translations.en);
		}
	};

	const data = { language, texts, handleLanguage };

	return (
		<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
	);
};

export { LanguageProvider };
export default LanguageContext;
