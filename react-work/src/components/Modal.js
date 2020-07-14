import React, {useState} from 'react';

// styles
import styled from 'styled-components';

import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';

const Modal = props => {

	const [isModalOpen, setIsModalOpen] = useState('');
	// const hide = () => setIsModalOpen('');
	// const show = () => setIsModalOpen('open');


	return (
		<>
		<Open onClick={() => setIsModalOpen('open')}>{props.open}</Open>
		<div className={"ModalBack " + isModalOpen }>
	    	<ModalContent>
		    	<Close onClick={() => setIsModalOpen('')}>{props.close}</Close>
		    	{props.content}
		    </ModalContent>
		</div>
		</>
	);
}

export default Modal;
	
// styles
const ModalComponent = styled.span`
	display:inline-block;
	max-height: 20px;
	padding:10px;
`
const ModalBack = styled.div`
	background: rgba(0,0,0,.8);
	position:fixed;
	top:-100vh;
	left:0;
	width: 100vw;
	height:100vh;
	z-index:3;
`
const ModalContent = styled.div`
	background:#fff;
	margin: 50px;
	border-radius:10px;
	padding: 20px;
`
const Open = styled.span`
	position:relative;
	display:inline-block;
	z-index: 2;
	cursor:pointer;
	margin: 10px;
`
const Close = styled.span`
	display:inline-block;
	position:relative;
	float:right;
	z-index: 2;
	font-size: 25px;
	cursor: pointer;
`