import React, { Component } from 'react'

import Grid from './Grid'
import Tile from './Tile'

import styles from './OpenFlowGrid.module.css';

export default class OpenFlowGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : {},
    };
  }
  static defaultProps = {
    cellCount : 900,
  }
  handlePress = (idx) => {
    if (this.state.selected[idx]) {
      this.deselect(idx);
    }
    else {
      this.select(idx);
    }
  }
  handleMouseEnter = (ev, idx) => {
    if (this.state.isMouseDown) {
      this.select(idx);
    }
  }
  handleMouseDown = () => {
    this.setState({isMouseDown : true});
  }
  handleMouseUp = () => {
    this.setState({isMouseDown : false});
  }
  select(idx) {
    const selected = Object.assign({}, this.state.selected);
    if (!selected[idx]) {
      selected[idx] = true;
      this.setState({selected});
    }
  }
  deselect(idx) {
    const selected = Object.assign({}, this.state.selected);
    if (selected[idx]) {
      delete selected[idx];
      this.setState({selected});
    }
  }
  render() {
    const items = (','.repeat(this.props.cellCount)).split(',');

    return (
      <div  className={styles.App} 
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            style={{'--lum':this.props.lum}}>

        <Grid className={styles.grid}>
          {items.map( (item, idx) => {

            const classes = [styles.tile];
            if (this.state.selected[idx]) {
              classes.push(styles.selected);
            }

            return (
              <Tile key={idx} 
                    className={classes.join(' ')} 
                    onMouseDown={()=>this.handlePress(idx)}
                    onMouseEnter={(ev)=>this.handleMouseEnter(ev, idx)} />
            );
          })}
        </Grid>
      </div>
    )
  }
}
