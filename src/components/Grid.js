import React, { Component } from 'react'

import styles from './Grid.module.css';
export default class Grid extends Component {
  render() {
    return (
      <div className={[this.props.className, styles.base].join(' ')}>
        {this.props.children}
      </div>
    )
  }
}
