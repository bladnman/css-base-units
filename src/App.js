import React, { Component } from 'react';

import Grid from './components/Grid'
import Tile from './components/Tile'

import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : {},
    };
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
    const items = (','.repeat(900)).split(',');
    return (
      <div className={styles.App} 
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}>

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
                    onMouseEnter={(ev)=>this.handleMouseEnter(ev, idx)}>
              
                {/* <div className={styles.label}>{item}</div> */}
                
              </Tile>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default App;
