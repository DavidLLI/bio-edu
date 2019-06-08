import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from "../reduxStates/stores/rootStore";
import { changeModule, changeSection } from '../reduxStates/actions/ScrollbarAction';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {ReactComponent as MenuSVG} from '../assets/assets-svg/menu.svg';
import {ReactComponent as ExpandSVG} from '../assets/assets-svg/expand.svg';
import {ReactComponent as CollapseSVG} from '../assets/assets-svg/collapse.svg';

import './HamMenu.css';

class HamMenu extends Component {
  constructor(props) {
    super(props);

    let pageData = store.getState().pageData;

    let menuStatus = [];

    pageData.forEach((data, index) => {
      menuStatus.push(false);
    });

    this.state = {
      show: false,
      hover: false,
      menuStatus: menuStatus
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChangeSection = this.handleChangeSection.bind(this);
    this.handleChangeModule = this.handleChangeModule.bind(this);
    this.handleExpandCollap = this.handleExpandCollap.bind(this);
  }

  handleClose() {
    this.setState({show: false});
  }

  handleOpen() {
    this.setState({show: true});
  }

  handleChangeSection(module, section) {
    store.dispatch(changeModule(module));
    store.dispatch(changeSection(section));
  }

  handleChangeModule(module) {
    store.dispatch(changeModule(module));
  }

  handleExpandCollap(module) {
    let menuState = this.state.menuStatus;
    menuState[module] = !menuState[module];
    this.setState({
      menuStatus: menuState
    });
  }

  render() {

    let { pageData, 
        currentPage, 
        currentModule, 
        currentSection } = store.getState();

    return (
      <div className='module-menu'>
        <div className="HamMenu"
              style={{color: this.state.hover ? '#0071BC' : 'white'}}
              onClick={this.handleOpen}
              onMouseEnter={() => {this.setState({hover: true})}}
              onMouseLeave={() => {this.setState({hover: false})}}>
          <MenuSVG className= 'HamMenu-svg' style={{height: 30, width: 50, fill: this.state.hover ? '#0071BC' : 'white'}} />
          Menu
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="modal-menu">
          <Modal.Header closeButton>
            <Modal.Title>ViralLiterate Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              pageData.map((module, moduleIndex) => {

                let sectionClassname = '';
                if (!this.state.menuStatus[moduleIndex]) {
                  sectionClassname = 'collapsed';
                }

                return (
                  <div className={'module-menu-item ' + sectionClassname}>
                    <div className='module-expand-button'>
                      {
                        this.state.menuStatus[moduleIndex] ? 
                        <CollapseSVG className='expand-button-svg'
                                        onClick={() => this.handleExpandCollap(moduleIndex)} /> :
                        <ExpandSVG className='expand-button-svg'
                                    onClick={() => this.handleExpandCollap(moduleIndex)} />
                      }
                      
                      <div className='module-itself'
                          onClick={() => {this.handleChangeModule(moduleIndex)}}>
                        {'Module ' + (moduleIndex + 1)}
                      </div>
                    </div>
                    <div className={'module-section ' + sectionClassname}>
                      {module.map((section, sectionIndex) => {
                        return (
                          <div className={'section-menu-item '}
                              onClick={() => {this.handleChangeSection(moduleIndex, sectionIndex)}}>
                            {'Section ' + (sectionIndex + 1) + ' - ' + section.name}
                          </div>
                        );
                      })}
                    </div>
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

export default HamMenu;
