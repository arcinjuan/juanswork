import React, {useState} from 'react';

// styles
import styled from 'styled-components';

const Modal = props => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const hide = () => setIsModalOpen(false);
	const show = () => setIsModalOpen(true);

	if(!isModalOpen) {
		return (
			<ModalComponent>
				<Open onClick={() => setIsModalOpen(true)}>{props.open}</Open>
			</ModalComponent>
		);
	}

  return (
			<ModalComponent>
				<Open>{props.open}</Open>
		    <ModalBack>
		    	<ModalContent>
			    	<Close onClick={() => setIsModalOpen(false)}>{props.close}</Close>
			    	{props.content}
			    </ModalContent>
		    </ModalBack>
			</ModalComponent>
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
	background: rgba(0,0,0,.5);
	position:fixed;
	top:0;
	left:0;
	width: 100vw;
	height:100vh;
`
const ModalContent = styled.div`
	background:#fff;
	margin: 50px;
	border-radius:10px;
	padding: 20px;
`
const Open = styled.span`
	position:relative;
	z-index: 2;
	cursor:pointer;
`
const Close = styled.span`
	display:inline-block;
	position:relative;
	float:right;
	z-index: 2;
	font-size: 25px;
	cursor: pointer;
`