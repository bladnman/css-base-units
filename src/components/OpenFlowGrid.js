import React, { Component } from 'react'
import Tile from './Tile'
import styles from './OpenFlowGrid.module.css';

export default class OpenFlowGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected      : {},
      isMouseDown   : false,
      isEraser      : false,
    };
  }
  static defaultProps = {
    cellCount     : 400,
    isFixed       : false,
    fixedColumns  : 20,
    fixedRows     : 20,
  }
  handlePress = (idx) => {
    
    if (this.state.selected[idx]) {
      this.deselect(idx);
      this.setState({isEraser:true});
    }
    else {
      this.select(idx);
      this.setState({isEraser:false});
    }

    this.setState({isMouseDown : true});

  }
  handleMouseEnter = (ev, idx) => {
    if (this.state.isMouseDown) {

      // erase
      if (this.state.isEraser) {
        this.deselect(idx);
      }

      else {
        this.select(idx);
      }
    }
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

    return (
      <div  className={styles.App} 
            onMouseUp={this.handleMouseUp}
            style={{'--lum':this.props.lum}}>
        
        {this.props.isFixed
          ? this.renderFixed()
          : this.renderFlow()
        }

      </div>
    )

  }
  renderFlow() {
    const items = (','.repeat(this.props.cellCount)).split(',');

    return (
        <div className={[styles.grid, styles.gridFlow].join(' ')}>
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
        </div>
    )
  }
  renderFixed() {
    const rows      = (new Array(this.props.fixedRows)).fill(1);
    const columns   = (new Array(this.props.fixedColumns)).fill(1);
    return (
      <div className={[styles.grid, styles.gridFixed].join(' ')}>
        {/* ROWS */}
        {rows.map((item, rowIdx) => 
          <div key={rowIdx} className={styles.row}>

            {/* COLUMNS */}
            {columns.map((item, colIdx) => {
              const itemIdx = (rowIdx * (this.props.fixedColumns)) + colIdx;
              const classes = [styles.tile, styles.fixedTile];
              if (this.state.selected[itemIdx]) {
                classes.push(styles.selected);
              }

              // TILE
              return (
                <Tile key={itemIdx} 
                      className={classes.join(' ')} 
                      onMouseDown={()=>this.handlePress(itemIdx)}
                      onMouseEnter={(ev)=>this.handleMouseEnter(ev, itemIdx)} />
              )
            })}
          </div>
        )}
      </div>
    )
  }
}
