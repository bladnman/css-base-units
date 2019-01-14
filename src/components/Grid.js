import React, { Component } from 'react'

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
    const scrollSize = 50; // todo: MAKE THIS DYNAMIC
    return scrollSize;
  }
  render() {
    return (
      <div className={[this.props.className, styles.base].join(' ')}>
        {this.props.children}
      </div>
    )
  }
}
