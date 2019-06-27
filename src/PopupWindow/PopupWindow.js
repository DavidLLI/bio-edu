import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import {ReactComponent as PlusIcon} from '../assets/assets-svg/add.svg';
import './PopupWindow.css';

class PopupWindow extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
    		'show': false
    	};

    	this.openModal = this.openModal.bind(this);
    	this.handleClose = this.handleClose.bind(this);
    }

    openModal() {
    	this.setState({ show: true });
    	this.props.modalOpen();
    }

    handleClose() {
    	this.setState({ 'show': false });
    	this.props.modalClose();
    }

    render() {
    	const content = this.props.data.content;
        const { position } = this.props.data;
    	return (
    		<div className='popup-box' style={{left: position.left, top: position.top}}>
	    		<div className='open-modal'
	                onClick={this.openModal}>
                    <PlusIcon className='plus-icon-svg'/>
	            </div>
	    		<Modal
	    			dialogClassName='popup-dialog'
	    			show={this.state.show}
	    			onHide={this.handleClose}
	    			centered>

	    			<Modal.Header closeButton>
            			<Modal.Title>{this.props.data.title}</Modal.Title>
         	 		</Modal.Header>
         	 		<Modal.Body style={{'zIndex': 3, 
         	 							'maxHeight': '70vh',  
         	 							'overflowY': 'scroll'}}>
         	 			<this.props.data.html />
         	 		</Modal.Body>
	    		</Modal>
    		</div>
    	);
    }
}

export default PopupWindow;