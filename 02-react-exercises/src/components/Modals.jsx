import React from 'react';
import { Modal } from './Modal';

const Modals = () => {
	return (
		<div>
			<h2>Modales</h2>
			<button>Modal 1</button>
			<Modal>
				<h3>Modal 1</h3>
				<p>Hola este es el contenido de mi modal 1</p>
				<img src='https://placeimg.com/400/400/animals' alt='Animals' />
			</Modal>
			<button>Modal 2</button>
			<Modal>
				<h3>Hola este es el contenido de mi modal 2</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
					voluptatum impedit? Sint consequatur magnam, aliquid, a praesentium
					tempore sit explicabo consectetur totam, voluptatum numquam esse?
				</p>
				<img src='https://placeimg.com/400/400/nature' alt='Nature' />
			</Modal>
		</div>
	);
};

export default Modals;
