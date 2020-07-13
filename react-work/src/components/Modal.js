import React, {useState} from 'react';

// icons
import { FaInfoCircle } from 'react-icons/fa';

const Modal = props => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const hide = () => setIsModalOpen(false);
	const show = () => setIsModalOpen(true);

	if(!isModalOpen) {
		return <span onClick={() => setIsModalOpen(true)}>{props.open}</span>
	}

  return (
    <div id="modal">
    	<span onClick={() => setIsModalOpen(false)}>{props.close}</span>

    	{props.content}
    </div>
  );
}

export default Modal;
	
