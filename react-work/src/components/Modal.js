import React, {useState} from 'react';

// styles
import styled from 'styled-components';

const Modal = props => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const hide = () => setIsModalOpen(false);
	const show = () => setIsModalOpen(true);

	if(!isModalOpen) {
		return <Icon onClick={() => setIsModalOpen(true)}>{props.open}</Icon>
	}

  return (
    <div id="modal">
    	<Icon onClick={() => setIsModalOpen(false)}>{props.open}</Icon>
    	{props.content}
    </div>
  );
}

export default Modal;
	
// styles
const Icon = styled.span`
	display:inline-block;
	position:relative;
	margin:10px;
	z-index: 2;
`