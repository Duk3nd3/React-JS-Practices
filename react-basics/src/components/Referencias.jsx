import React, { /*createRef,*/ useRef } from 'react';

export default function Referencias() {
	//let refMenu = createRef(),
	let refMenu = useRef(),
		refMenuBtn = useRef();

	// console.log(refMenu, refMenuBtn);

	const handleToggleMenu = (e) => {
		if (refMenuBtn.current.textContent === 'Menu') {
			refMenuBtn.current.textContent = 'Cerrar';
			refMenu.current.style.display = 'block';
		} else {
			refMenuBtn.current.textContent = 'Menu';
			refMenu.current.style.display = 'none';
		}
		// const $menu = document.getElementById('menu');
		// if (e.target.textContent === 'Menu') {
		// 	e.target.textContent = 'Cerrar';
		// 	$menu.style.display = 'block';
		// } else {
		// 	e.target.textContent = 'Menu';
		// 	$menu.style.display = 'none';
		// }
	};

	return (
		<>
			<h2>Referencias</h2>
			<button ref={refMenuBtn} onClick={handleToggleMenu}>
				Menu
			</button>
			<nav ref={refMenu} style={{ display: 'none' }}>
				<a href='https://github.com/'>Seccion 1</a>
				<br />
				<a href='https://github.com/'>Seccion 2</a>
				<br />
				<a href='https://github.com/'>Seccion 3</a>
				<br />
				<a href='https://github.com/'>Seccion 4</a>
				<br />
				<a href='https://github.com/'>Seccion 5</a>
				<br />
			</nav>
		</>
		// 	<h2>Referencias</h2>
		// 	<button id='menu-btn' onClick={handleToggleMenu}>
		// 		Menu
		// 	</button>
		// 	<nav id='menu' style={{ display: 'none' }}>
		// 		<a href='https://github.com/'>Seccion 1</a>
		// 		<br />
		// 		<a href='https://github.com/'>Seccion 2</a>
		// 		<br />
		// 		<a href='https://github.com/'>Seccion 3</a>
		// 		<br />
		// 		<a href='https://github.com/'>Seccion 4</a>
		// 		<br />
		// 		<a href='https://github.com/'>Seccion 5</a>
		// 		<br />
		// 	</nav>
		// </>
	);
}
