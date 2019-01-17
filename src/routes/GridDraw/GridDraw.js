import React, { Component } from 'react';

import OpenFlowGrid from '../../components/OpenFlowGrid'
import styles from './GridDraw.module.css';

class GridDraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lum : 1.0,
      isFixed : true,
      fixedColumns : 20,
      fixedRows : 20,
    }
  }
  static defaultProps = {
    lumStepAmt : 0.25,
    lumMax : 5,
    lumMin : 0.25,
  }
  setLum = (lum) => {
    this.setState({lum});
  }
  render() {
    const { lum } = this.state;
    const { lumStepAmt, lumMax, lumMin } = this.props;

    return (
      <div>
        <div className={styles.toolbar}>
          <div className={styles.toolbarSection}>
            <span className={styles.toolbarTitle}>LUM:</span>
            <span className={[styles.toolbarStepButton, 
                              styles.toolbarStepButtonDown,
                              lum <= lumMin ? styles.toolbarButtonDisabled : ''].join(' ')}
                  onClick={() => this.setState({lum : Math.max(lumMin, lum - lumStepAmt)})}>-</span>

            <span className={[styles.toolbarLabel, styles.lumLabel].join(' ')}>{lum}</span>   
            <span className={[styles.toolbarStepButton, 
                              styles.toolbarStepButtonUp,
                              lum >= lumMax ? styles.toolbarButtonDisabled : ''].join(' ')}
                  onClick={() => this.setState({lum : Math.min(lumMax, lum + lumStepAmt)})}>+</span>
       
          </div>

          <span className={styles.toolbarTitle}>GRID:</span>
          <span className={styles.toolbarLink} onClick={() => this.setState({isFixed:true})}>fixed</span>
          <span className={styles.toolbarLink} onClick={() => this.setState({isFixed:false})}>flow</span>

        </div>
        <OpenFlowGrid cellCount={900}
                      lum={this.state.lum} 
                      isFixed={this.state.isFixed}
                      fixedColumns={this.state.fixedColumns}
                      fixedRows={this.state.fixedRows}
                      className={styles.openFlowGrid} />
      </div>
    );
  }
}

export default GridDraw;
