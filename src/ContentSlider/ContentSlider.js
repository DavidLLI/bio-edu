import React, { Component } from 'react';

import { connect } from 'react-redux';
import store from '../reduxStates/stores/rootStore';
import { changeFocus, changePage } from '../reduxStates/actions/ScrollbarAction';

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import './ContentSlider.css';

import { SLIDING_SPEED } from "../reduxStates/constants/numbers";

class ContentSlider extends Component {
	constructor(props) {
    	super(props);
    	this.sliderRef = React.createRef();
    	this.settings = {
	      dots: false,
	      vertical: true,
          infinite: false,
          slidesToShow: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
	      speed: SLIDING_SPEED
	    };

        this.sliding = false;
        this.timer = undefined;

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
    	let currentPage = store.getState().currentPage;

    	this.sliderRef.current.slickGoTo(currentPage);
    }

    handleScroll(e) {
        const wheelAmount = 15;
        if (this.timer) {
            clearTimeout(this.timer);
        }
        
        this.timer = setTimeout(() => {
            this.sliding = false;
            clearTimeout(this.timer);
        }, 150);


        if (this.sliding === false && store.getState().sliding === false) {
            let currentPage = store.getState().currentPage;
            if (e.deltaY > wheelAmount || e.deltaY < -wheelAmount) {
                this.sliding = true;
                let uniqueTimer = setTimeout(() => {
                    this.sliding = false;
                    clearTimeout(uniqueTimer);
                }, SLIDING_SPEED * 1.5);
            }
            
            if (e.deltaY > wheelAmount) {
                store.dispatch(changePage(currentPage + 1));
            }
            else if (e.deltaY < -wheelAmount) {
                store.dispatch(changePage(currentPage - 1));
            }
        }
        e.preventDefault();
    }

    render() {
    	let content = store.getState().pageData;
    	
    	return (
            <div className='content-slider'
                onWheel={this.handleScroll}>
        		<Slider 
        			{...this.settings}
        			ref={this.sliderRef}>
    			  	{content.map((article, index) => 
                    <div key={index} className='list-item'>
                        <img className='images' 
                            src={article.image} />
                        <div className='text-content'>
                            <div className='theme'>
                                {article.theme}
                            </div>
                            <div className='title'>
                                {article.title}
                            </div>
                            <div className='description'>
                                {article.description}
                            </div>
                        </div>
    				</div>)}
    			</Slider>
            </div>
    	);
    }
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    sliding: state.sliding
  }
}

export default connect(mapStateToProps)(ContentSlider);