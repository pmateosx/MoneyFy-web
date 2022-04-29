import './Modal.scss'

import { FiXCircle } from "react-icons/fi";
import { useRef } from 'react';

const Modal = ({children, onClose, title}) => {
    const modalRef = useRef()

    const closeOutModal = e => modalRef.current === e.target ? onClose() : ''

    return (
        <div className='Modal' ref={modalRef} onClick={closeOutModal}>
            <div className='modal-content'>
                <button className='close-btn' onClick={onClose}><FiXCircle/></button>
                <h3>{title}</h3>
                {children}
            </div>
        </div>
    )
}

export default Modal