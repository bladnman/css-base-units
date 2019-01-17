import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'
export default class NavBar extends Component {
  links = [
    { url : '/',                  title : 'HOME'},     
    { url : '/draw/',             title : 'DRAW'},
    { url : '/patterns/',         title : 'PATTERNS'},
  ]
  render() {
    return (
      <div className={styles.root}>
        {this.links.map((linkObj, idx) =>
          <NavLink  to              = {linkObj.url} 
                    className       = {styles.navLink}
                    activeStyle     = {{borderBottomColor : 'var(--color__blue'}}
                    key             = {idx}
                    >{linkObj.title}</NavLink>
        )}
      </div>
    )
  }
}
