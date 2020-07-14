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
	    		<CloseBar>
		    		<Close onClick={() => setIsModalOpen('')}>{props.close}</Close>
		    	</CloseBar>
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
	z-index:5;
`
const ModalContent = styled.div`
	background:#fff;
	color:#333;
	margin: 50px auto;
	border-radius:10px;
	padding: 40px 20px;
	position: relative;
	max-width: 800px;
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
	z-index: 3;
	font-size: 20px;
	cursor: pointer;
	color: #064a58;
	transition: color ease .5s;
	margin: 10px;
	&:hover{
		color: #fff;
	}
`
const CloseBar = styled.div`
	position: absolute;
  z-index: 2;
  background: #1ba0bb;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  border-radius: 10px 10px 0 0;
`