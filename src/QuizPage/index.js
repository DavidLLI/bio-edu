import React, { Component } from 'react';

import './QuizPage.css';

class QuizPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			singleSelected: undefined,
			mulitpleSelected: [],
			result: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.data !== prevProps.data) {
			this.setState({result: ''});
            if (typeof(this.props.data.answer) === 'number') {
				this.setState({singleSelected: undefined});
			}
			else if (typeof(this.props.data.answer) === 'object') {
				this.setState({mulitpleSelected: []});
			}
        }
	}

	onChange(e) {
		//console.log('here');
		if (typeof(this.props.data.answer) === 'number') {
			this.setState({singleSelected: e.target.value});
		}
		else if (typeof(this.props.data.answer) === 'object') {
			let selected = this.state.mulitpleSelected;
			if (!selected.includes(e.target.value)) {
				selected.push(e.target.value);
			}
			else {
				let index = selected.findIndex((t) => {return t === e.target.value});
				selected.splice(index, 1);
			}
			//console.log(selected);
			this.setState({mulitpleSelected: selected});
		}
	}

	onSubmit() {
		if (typeof(this.props.data.answer) === 'number') {
			if (this.props.data.answer.toString() === this.state.singleSelected) {
				this.setState({result: 'Correct!'});
			}
			else {
				this.setState({result: 'Incorrect'});
			}
		}
		else if (typeof(this.props.data.answer) === 'object') {
			let result = true;
			let { mulitpleSelected } = this.state;
			let answer = this.props.data.answer.map((ans) => {return ans.toString()});
			answer.forEach((ans, index) => {
				if (!mulitpleSelected.includes(ans)) {
					result = false;
				}
			});
			mulitpleSelected.forEach((ans, index) => {
				if (!answer.includes(ans)) {
					result = false;
				}
			});
			this.setState({result: result ? 'Correct!' : 'Incorrect'});
			//console.log(result);
		}
	}

	render() {
		let data = this.props.data;
		return (
			<div className='quiz-page'>
				<img src={data.image}
					className='quiz-image' />
				<div className='quiz-question'>
					{ data.question }
				</div>
				<div className='quiz-options' >
					{ data.choices.map((option, index) => {
						let type = 'radio';
						let checked = false;
						if (typeof(this.props.data.answer) === 'number') {
							checked = this.state.singleSelected === index.toString();
						}
						else if (typeof(this.props.data.answer) === 'object') {
							checked = this.state.mulitpleSelected.includes(index.toString());
							type = 'checkbox';
						}
						return (
							<div key={index}
								className='quiz-radio'>
						      <label>
						        <input type={type} 
						        	value={index} 
						        	checked={checked} 
						        	onChange={this.onChange} />
						        	<label className='quiz-option-text'>
						        		{option}
						        	</label>
						      </label>
						    </div>
						);
					})}
				</div>
				<div className='quiz-submitButton'
					onClick={this.onSubmit}>
					Submit
				</div>
				<div className='quiz-result'>
					{this.state.result}
				</div>
			</div>
		);
	}
}

export default (QuizPage);