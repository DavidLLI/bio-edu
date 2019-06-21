import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import store from "../reduxStates/stores/rootStore";
import { navActive, changeTutorial } from '../reduxStates/actions/ScrollbarAction';

import './Tutorial.css';

class Tutorial extends Component {
	constructor(props) {
		super(props);

		this.state = {
			run: false,
			steps: [
		        {
			        target: '.home-logo-svg',
			        content: 'Click on the icon at any time to go back to the Home screen',
			        disableBeacon: true
		        },
		        {
		        	target: '.share-logo',
		        	content: 'Like this learning resource? Share it to your social account!',
		        	disableBeacon: true,
		        	placement: 'right'
		        },
		        {
		        	target: '.ScrollNav',
		        	content: 'Click the curret page number highlighted in the blue area to view index.',
		        	placement: 'left',
		        	disableBeacon: true
		        },
		        {
		        	target: '.change-section',
		        	content: 'Click the forward or back button to switch between different sections of the same module.',
		        	placement: 'left',
		        	disableBeacon: true
		        },
		        {
		        	target: '.ScrollArea',
		        	content: 'Scroll up or down to switch between different pages.',
		        	placement: 'left',
		        	disableBeacon: true
		        },
		        {
		        	target: '.animationBox',
		        	content: 'Use these four media controls to play/pause/replay animations as well as to go to previous or next page.',
		        	placement: 'left',
		        	disableBeacon: true
		        },
		        {
		        	target: '.HamMenu',
		        	content: 'Click this hamburger menu to open the ViraLiterate menu. You can use this menu to navigate between different sections or modules.',
		        	placement: 'left',
		        	disableBeacon: true
		        },
		        {
		        	target: '.text-description',
		        	content: 'Please read the explainatory text before you watch the animation. Once you finish reading all the contents of this page, click the forward or back buttons below the text to review the previous page or go to the next page.',
		        	placement: 'right',
		        	disableBeacon: true
		        }
		    ],
		    stepIndex: 0,
		    hover: false
		};
		this.steps = React.createRef();
		this.onExit = this.onExit.bind(this);
		this.handleJoyrideCallback = this.handleJoyrideCallback.bind(this);
	}

	onExit() {
		this.setState({run: false});
	}

	handleJoyrideCallback(data) {
		const { action, index, status, type } = data;

		if (index >= 1 && index <= 4) {
	    	store.dispatch(navActive(true));
	    }
	    else {
	    	store.dispatch(navActive(false));
	    }

	    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
	      // Update state to advance the tour
	      this.setState({ stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) });
	    }
	    else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
	      // Need to set our running state to false, so we can restart if we click start again.
	      this.setState({ stepIndex: 0 });
	      store.dispatch(changeTutorial(false));
	      store.dispatch(navActive(false));
	    } 
	}

	render() {
		const { run, steps, stepIndex } = this.state;
		return (
			<div>
				<div className='tutorial-button'
					style={{color: this.state.hover ? '#0071BC' : 'white'}}
					onMouseEnter={() => {this.setState({hover: true})}}
              		onMouseLeave={() => {this.setState({hover: false})}}
              		onClick={() => {store.dispatch(changeTutorial(true));}}>
					<div style={{fontSize: '39.8px', lineHeight: '38.8px'}}>
						?
					</div>
					<div style={{fontSize: '18px', lineHeight: '18px'}}>
						Tutorial
					</div>
				</div>
				<Joyride
				  callback={this.handleJoyrideCallback}
		          run={store.getState().tutorialActive}
		          steps={steps}
		          stepIndex={stepIndex}
		          continuous={true}
		          showSkipButton={true}
		          showProgress={true}
		          styles={{options: {
		          	primaryColor: '#0071BC'
		          }}}
		        />
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    tutorialActive: state.tutorialActive
  }
};

const DynamicTutorial = connect(
  	mapStateToProps
)(Tutorial);

export default DynamicTutorial;