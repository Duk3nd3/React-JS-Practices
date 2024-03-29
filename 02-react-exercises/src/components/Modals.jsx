import React from 'react';
import { useModal } from '../hooks/useModal';
import ContactForm from './ContactForm';
import Modal from './Modal';
import ModalPortal from './ModalPortal';
import SongSearch from './SongSearch';

const Modals = () => {
	const [isOpenModalUno, openModalUno, closeModalUno] = useModal(false);
	const [isOpenModalDos, openModalDos, closeModalDos] = useModal(false);
	const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
	const [isOpenSearchSong, openSearchSong, closeSearchSong] = useModal(false);
	const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

	return (
		<div>
			<h2>Modales</h2>
			<button onClick={openModalUno}>Modal 1</button>
			<Modal isOpen={isOpenModalUno} closeModal={closeModalUno}>
				<h3>Modal 1</h3>
				<p>Hola este es el contenido de mi modal 1</p>
				<img src='https://placeimg.com/400/400/animals' alt='Animals' />
			</Modal>
			<button onClick={openModalDos}>Modal 2</button>
			<Modal isOpen={isOpenModalDos} closeModal={closeModalDos}>
				<h3>Hola este es el contenido de mi modal 2</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
					voluptatum impedit? Sint consequatur magnam, aliquid, a praesentium
					tempore sit explicabo consectetur totam, voluptatum numquam esse?
				</p>
				<img src='https://placeimg.com/400/400/nature' alt='Nature' />
			</Modal>
			<button onClick={openModalContact}>Modal Contacto</button>
			<Modal isOpen={isOpenContact} closeModal={closeModalContact}>
				<ContactForm />
			</Modal>
			<button onClick={openSearchSong}>Modal Search Song</button>
			<Modal isOpen={isOpenSearchSong} closeModal={closeSearchSong}>
				<SongSearch />
			</Modal>
			<button onClick={openModalPortal}>Modal en Portal</button>
			<ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
				<h3>Este es el contenido de mi modal Portal</h3>
				<p>
					Este es el contenido de un modal que carga en otro nodo del DOM
					diferente a donde carga nuestra app de React, gracias a un React
					Portal.
				</p>
				<img src='https://placeimg.com/400/400/tech' alt='Technology' />
			</ModalPortal>
		</div>
	);
};

export default Modals;
