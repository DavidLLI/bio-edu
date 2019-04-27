import React, { Component } from 'react';

import { connect } from 'react-redux';
import store from '../reduxStates/stores/rootStore';
import { changeFocus, changePage } from '../reduxStates/actions/ScrollbarAction';

import LottieController from './LottieController';
import ImageSlider from '../ImageSlider/ImageSlider';
import PopupWindow from '../PopupWindow/PopupWindow';

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import './ContentSlider.css';

import { SLIDING_SPEED } from "../reduxStates/constants/numbers";

class ContentSlider extends Component {
	constructor(props) {
    	super(props);
    	this.sliderRef = React.createRef();
        this.animationRef = [];

    	this.settings = {
	      dots: false,
          lazyLoad: 'progressive',
	      vertical: true,
          infinite: false,
          draggable: false,
          swipe: false,
          slidesToShow: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
	      speed: SLIDING_SPEED
	    };

        this.state = {
            modalShow: false
        };

        this.sliding = false;
        this.timer = undefined;

        this.handleScroll = this.handleScroll.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        let content = store.getState().pageData;
    	let currentPage = store.getState().currentPage;

    	this.sliderRef.current.slickGoTo(currentPage, true);
        if (this.animationRef[currentPage].current) {
            if (prevProps.currentPage === currentPage) {
                this.animationRef[currentPage].current.handleRestart();
            }
            else {
                this.animationRef[currentPage].current.handleStop();
            }
        }  
    }

    handleScroll(e) {
        if (this.state.modalShow) {
            return;
        }
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

    openModal() {
        this.setState({modalShow: true});
    }

    closeModal() {
        this.setState({modalShow: false});
    }

    render() {
    	let content = store.getState().pageData;
        let progress = store.getState().progress;
        let currentPage = store.getState().currentPage;

        this.animationRef = [];

    	return (
            <div className='content-slider'
                onWheel={this.handleScroll}>
        		<Slider 
        			{...this.settings}
        			ref={this.sliderRef}
                    className='slider-list'>
    			  	{content.map((article, index) => {
                        this.animationRef.push(React.createRef());
                        return (
                            <div key={index} className='list-item'>
                                {article.image &&
                                    <div className='old'>
                                        <div className='images'>
                                            <ImageSlider
                                                before={ article.image }
                                                after={ article.afterImage }
                                                progress={ progress } />
                                        </div>
                                        <div className='text-content'>
                                            {!article.popup || 
                                                <PopupWindow 
                                                    data={ article.popup }
                                                    modalOpen={ this.openModal }
                                                    modalClose={ this.closeModal } />
                                            }
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
                                    </div>
                                }
                                {article.animation &&
                                    <div className='new'>
                                        <LottieController
                                            ref={this.animationRef[index]}
                                            animation={article.animation}/>
                                    </div>
                                }
                            </div>
                        );
                    })}
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