import React, { Component } from 'react';

import OpenFlowGrid from './components/OpenFlowGrid'
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lum : 1.0,
      isFixed : true,
      fixedColumns : 20,
      fixedRows : 20,
    }
  }
  setLum = (lum) => {
    this.setState({lum});
  }
  render() {
    return (
      <div>
        <div className={styles.toolbar}>
          <span className={styles.toolbarTitle}>LUM:</span>
          <span className={styles.toolbarLink} onClick={() => this.setLum()}>(empty)</span>
          <span className={styles.toolbarLink} onClick={() => this.setLum(0.5)}>0.5</span>
          <span className={styles.toolbarLink} onClick={() => this.setLum(1.0)}>1.0</span>
          <span className={styles.toolbarLink} onClick={() => this.setLum(1.5)}>1.5</span>
          <span className={styles.toolbarLink} onClick={() => this.setLum(2.0)}>2.0</span>
          <span className={styles.toolbarLink} onClick={() => this.setLum(3.0)}>3.0</span>

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

export default App;
