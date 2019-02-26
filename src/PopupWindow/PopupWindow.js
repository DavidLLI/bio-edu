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
    	this.props.modalOpen();
    }

    handleClose() {
    	this.setState({ 'show': false });
    	this.props.modalClose();
    }

    render() {
    	const images = this.props.data.images;
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
         	 		<Modal.Body style={{'z-index': 3, 'max-height': 'calc(100vh - 210px)',  'overflow-y': 'scroll'}}>
         	 			{
         	 				images.map((value, index) => {
         	 					return (
         	 						<img src={value}
			         	 				className='popup-image'>
			         	 			</img>
         	 					);
         	 				})
         	 			}	
         	 			{this.props.data.description}
         	 		</Modal.Body>

	    		</Modal>
    		</div>
    	);
    }
}

export default PopupWindow;