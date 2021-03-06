import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { changeFocus, changePage, changeSection, navActive } from '../reduxStates/actions/ScrollbarAction';
import store from "../reduxStates/stores/rootStore";

import {ReactComponent as BackButton} from '../assets/assets-svg/back-button.svg';
import {ReactComponent as NextButton} from '../assets/assets-svg/next-button.svg';

import './ScrollNav.css';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class NewScrollNav extends React.Component {

  constructor(props) {
    super(props);

    this.timerUniqueID = false;

  	this.state = {
      'active': false
  	};

    this.scrollDivRef = React.createRef();
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    let { currentPage, currentModule, currentSection, pageData } = store.getState();

    let aggreCurrentPage = currentPage;

    pageData[currentModule].forEach((section, index) => {
      if (index < currentSection) {
        aggreCurrentPage += section.pages.length;
      }
    });

    this.currentScrollPos = aggreCurrentPage;
    this.scrollToWithContainer('' + (aggreCurrentPage + 1));
  }

  componentDidUpdate(prevProps) {
    let { currentPage, currentModule, currentSection, pageData } = store.getState();

    let aggreCurrentPage = currentPage;

    pageData[currentModule].forEach((section, index) => {
      if (index < currentSection) {
        aggreCurrentPage += section.pages.length;
      }
    });

    this.currentScrollPos = aggreCurrentPage;
    this.scrollToWithContainer('' + (aggreCurrentPage + 1));

    let navActive = store.getState().navActive;

    if (navActive) {
      //document.getElementById('backdrop-modal').style.display = 'block';
      document.getElementById('backdrop-modal').style.opacity = 0.5;
    }
    else {
      //document.getElementById('backdrop-modal').style.display = 'none';
      document.getElementById('backdrop-modal').style.opacity = 0;
    }

  }

  handleChangeSection(section) {
      store.dispatch(changeSection(section));
  }

  handleScroll() {
    if (this.scrollDivRef.current) {
      //console.log(this.scrollDivRef.current.childBindings);
      let pageNumberOffset = this.scrollDivRef.current.childBindings.domNode.childNodes[0].offsetHeight;
      let currentScroll = this.scrollDivRef.current.childBindings.domNode.scrollTop;
      let currentPageNumberRound = Math.round(currentScroll / (pageNumberOffset));
      //console.log(currentScroll / (pageNumberOffset));

      if (this.timerUniqueID) {
        clearTimeout(this.timerUniqueID);
        this.timerUniqueID = false;
      }

      this.timerUniqueID = setTimeout(() => {
          this.scrollToWithContainer('' + (currentPageNumberRound + 1));
          this.timerUniqueID = false;
      }, 200);
    }
  }

  handleChangePage(index) {
    let actualIndex = index - 1;

    let { pageData, currentModule, currentSection, currentPage } = store.getState(); 

    let changeToSection = 0;
    let changeToPage = 0;

    let currentModuleData = pageData[currentModule];

    let aggreCurrentPage = currentPage;

    while ( actualIndex !== 0 ) {
      actualIndex -= 1;
      changeToPage += 1;

      if (changeToPage === currentModuleData[changeToSection].pages.length) {
        changeToPage = 0;
        changeToSection += 1;
      }
    }

    store.dispatch(changeSection(changeToSection));
    store.dispatch(changePage(changeToPage));
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo(name) {
    scroller.scrollTo('50', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer(name) {
    let pageNumberOffset = this.scrollDivRef.current.childBindings.domNode.childNodes[0].offsetHeight;
  	scroller.scrollTo(name, {
  	    duration: 300,
  	    delay: 0,
        offset: -0.49 * window.innerHeight,
  	    smooth: 'easeInOutQuart',
  	    containerId: 'ScrollArea'
  	});

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleActive() {
    let tutorialActive = store.getState().tutorialActive;
    if (!tutorialActive) {
      store.dispatch(navActive(true));
    }
  }

  handleInActive() {
    let tutorialActive = store.getState().tutorialActive;
    if (!tutorialActive) {
      store.dispatch(navActive(false));
    }
  }

  render() {
    let { pageData, 
        currentPage, 
        currentModule, 
        currentSection,
        navActive } = store.getState();

    let backButtonDisable = '';
    let nextButtonDisable = '';
    if (currentSection === 0) {
        backButtonDisable = ' disabled';
    }
    if (currentSection === pageData[currentModule].length - 1) {
        nextButtonDisable = ' disabled';
    }

    let previousSection = currentSection;
    if (currentSection == 0) {
      previousSection = pageData[currentModule].length - 1;
    }

    let nextSection = currentSection + 2;
    if (currentSection == pageData[currentModule].length - 1) {
      nextSection = 1;
    }

    let displayData = [];
    pageData[currentModule].forEach((section, index) => {
      section.pages.forEach((page, index) => {
        displayData.push(page);
      });
    });

    return (

      <div className={navActive ? 'ScrollNav active' : 'ScrollNav'}
            onMouseEnter={this.handleActive}
            onMouseLeave={this.handleInActive}>

        <div className='change-section'>
          <div className='change-section-title'>
            Current Section
          </div>
          <div className='section-change-buttons'>
            <div className='section-back-button'>
              <BackButton className={'section-back-button-svg' + backButtonDisable} 
                          onClick={() => this.handleChangeSection(currentSection - 1)}/>
              <div className='current-section'>
                {'Section ' + (previousSection)}
              </div>
            </div>
            <div className='current-section actual-section'>
              <div>
                |
              </div>
              <div>
                {'Section ' + (currentSection + 1)}
              </div>
            </div>
            <div className='section-next-button'>
              <NextButton className={'section-next-button-svg' + nextButtonDisable}
                          onClick={() => this.handleChangeSection(currentSection + 1)}/>
              <div className='current-section'>
                {'Section ' + (nextSection)}
              </div>
            </div>
          </div>
        </div>

      	<Element id='ScrollArea' 
            className={'ScrollArea'}
            ref={this.scrollDivRef} 
            onScroll={this.handleScroll}

            >

	        {displayData.map((page, index) => {

            let selected = ' ';

            let aggreCurrentPage = currentPage;

            pageData[currentModule].forEach((section, index) => {
              if (index < currentSection) {
                aggreCurrentPage += section.pages.length;
              }
            });

            if (aggreCurrentPage === index) {
              selected += 'page-selected';
            }

            let paddedIndex = index + 1;
            if (paddedIndex < 10) {
              paddedIndex = '0' + paddedIndex;
            }

	        	return (
        			<Element
        			  key={index}
    					  className={'page-row' + selected}
    					  name={'' + (index + 1)}
    					  onClick={() => this.handleChangePage(index + 1)}>
                <div className={'page-number' + selected}>
                  {paddedIndex}
                </div>
                <div className={'page-title' + selected}>
                  {page.title}
                </div>
        			</Element>
	        	);
	        })}
          
          <div className='bottom-blur' />
          <div className={navActive ? 'background-nav  active' : 'background-nav'} />
	    </Element>
      </div>
    );
  }
};

/*
<label className='page-title'
		style={{fontSize: fontSize * 0.5, top: ulPosition + fontSize * 0.4}}>
	{store.getState().pageData[index].title}
</label>
*/

const mapStateToProps = state => {
  return {
    navActive: state.navActive,
    focus: state.focus,
    currentPage: state.currentPage,
    currentModule: state.currentModule,
    currentSection: state.currentSection,
    sliding: state.sliding
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeFocus: focus => {
      dispatch(changeFocus(focus))
    }
  }
}

const VisibleScrollNav = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(NewScrollNav);

export default VisibleScrollNav;