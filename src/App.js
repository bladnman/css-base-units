import React, { Component } from 'react';

import Grid from './components/Grid'
import Tile from './components/Tile'

import styles from './App.module.css';

class App extends Component {
  render() {
    const items = ('a,'.repeat(30)).split(',');
    return (
      <div className={styles.App}>
        <Grid className={styles.grid}>
          {items.map( (item, idx) => {
            return <Tile key={idx} className={styles.tile}>{item}</Tile>
          })}
        </Grid>
      </div>
    );
  }
}

export default App;
