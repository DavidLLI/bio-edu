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
    	const content = this.props.data.content;
    	return (
    		<div>
	    		<div className='open-modal'
	                onClick={this.openModal}>
	                Click here to open pop-up
	            </div>
	    		<Modal
	    			size='lg'
	    			show={this.state.show}
	    			onHide={this.handleClose}
	    			centered>

	    			<Modal.Header closeButton>
            			<Modal.Title>{this.props.data.title}</Modal.Title>
         	 		</Modal.Header>
         	 		<Modal.Body style={{'zIndex': 3, 
         	 							'maxHeight': '90vh',  
         	 							'overflowY': 'scroll'}}>
         	 			{
         	 				content.map((value, index) => {
         	 					return (
         	 						<div className='popup-content'
         	 							key={index}>
         	 							{value.description}
         	 							<img src={value.image}
				         	 				className='popup-image'>
				         	 			</img>
         	 						</div>
         	 					);
         	 				})
         	 			}	
         	 		</Modal.Body>
	    		</Modal>
    		</div>
    	);
    }
}

export default PopupWindow;