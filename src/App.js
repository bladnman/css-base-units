import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import GridDraw from './routes/GridDraw/GridDraw'
import CSSPatterns from './routes/CSSPatterns/CSSPatterns'
import styles from './App.module.css';

class App extends Component {
  render() {
    const defaultRoute = CSSPatterns;

    return (
      <div className={styles.App}>
        <NavBar />
        <Switch>
          <Route path='/draw' component={GridDraw}/>
          <Route path='/patterns' component={CSSPatterns}/>
          <Route component={defaultRoute}/>
        </Switch>
      </div>
    );
  }
}

export default App;

