import React, { Component } from 'react'
import styles from './Tile.module.css';

export default class Tile extends Component {
  render() {
    return (
      <div 
        onMouseDown={this.props.onMouseDown}
        onMouseEnter={this.props.onMouseEnter}
        className={[this.props.className, styles.base].join(' ')}>
        {this.props.children}
      </div>
    )
  }
}
