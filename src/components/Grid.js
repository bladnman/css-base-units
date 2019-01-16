import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import styles from './Grid.module.css';
export default class Grid extends Component {
  constructor() {
    super();
    window.addEventListener('keydown', this.handleArrowKeys);
    this.scroller = document.querySelector('html');
  }
  handleArrowKeys = (ev) => {
    const isUp = ev.key === 'ArrowUp';
    const isDown = ev.key === 'ArrowDown';
    if (isUp || isDown) {
      ev.preventDefault();
      const scrollAmt = this.getScrollSize() * (isDown ? 1 : -1);
      this.scroller.scrollBy(0, scrollAmt);
    }
  }
  getScrollSize() {
    const firstChildElem = this.refs && ReactDOM.findDOMNode(this.refs[0]);
    if (!firstChildElem) {
      return 0;
    }
    const style       = document.defaultView.getComputedStyle(firstChildElem, '');
    const scrollSize  = parseInt(style.getPropertyValue('height')) + 
                        parseInt(style.getPropertyValue('border-width')) + 
                        parseInt(style.getPropertyValue('margin-bottom'));
    // const scrollSize  = parseInt(style.getPropertyValue('height'));
    return scrollSize;
  }
  render() {
    return (
      <div className={[this.props.className, styles.base].join(' ')}>
        {React.Children.map(this.props.children, (element, idx) => {
          return React.cloneElement(element, { ref: idx });
        })}
      </div>
    )
  }
}
