import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

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
    	console.log('here');
    	this.setState({ show: true });
    }

    handleClose() {
    	this.setState({ 'show': false });
    }

    render() {
    	return (
    		<div>
	    		<div className='open-modal'
	                onClick={this.openModal}>
	                Click here to open pop-up
	            </div>
	    		<Modal
	    			className='popup-window'
	    			show={this.state.show}
	    			onHide={this.handleClose}>

	    			<Modal.Header closeButton>
            			<Modal.Title>{this.props.data.title}</Modal.Title>
         	 		</Modal.Header>
         	 		<Modal.Body>
         	 			<img src={this.props.data.image}
         	 				className='popup-image'>
         	 			</img>
         	 			{this.props.data.description}
         	 		</Modal.Body>

	    		</Modal>
    		</div>
    	);
    }
}

export default PopupWindow;