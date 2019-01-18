import React, { Component } from 'react'
import styles from './CSSPatterns.module.css'
import gridStyles from './Grid.module.css'
import tileStyles from './Tile.module.css'

export default class CSSPatterns extends Component {
  getBaseItems() {
    return [
      {
        actionText      : "HOT",
        message         : "How do you like your coffee?",
      },
      {
        actionText      : "COLD",
        message         : "How does snow make you feel?",
      },
      {
        actionText      : "WINTER",
        message         : "The very best season:",
      },
      {
        actionText      : "SWEATER",
        message         : "Favorite article of clothing:",
      },
      {
        actionText      : "SILLY",
        message         : "Make a big silly face!",
      },
    ]
  }
  getGroups() {
    return [
      {
        title : "Things you like",
        items : this.getBaseItems(),
      },
      {
        title : "Some awesome ideas...",
        items : this.getBaseItems(),
      },
    ]
  }
  render() {
    const groups = this.getGroups();
    if (groups) {
      groups[1].items[2].isImportant = true;
    }

    return (
      <div className={styles.root}>
        {groups.map((group, idx) => 
          <CSSPatternsGrid  key     = {idx}
                            title   = {group.title}
                            items   = {group.items} />)
        }
      </div>
    )
  }
}

/** GRID */
const CSSPatternsGrid = function CSSPatternsGrid(props) {
  const { title, items } = props;
  const styles = gridStyles;
  return (
    <div className={styles.root}>
      {title && 
        <div className={styles.title} >{title}</div>
      }
      <div className={styles.grid}>
        {items.map((item, idx) => 
          <Tile key           = {idx}
                className     = {[styles.tile].join(' ')}
                buttonLabel   = {item.actionText}
                message       = {item.message} 
                isButtonAlert = {item.isImportant} />)
        }
      </div>
    </div>
  )
}

/** TILE */
const Tile = function Tile(props) {
  const { message, buttonLabel, className, isButtonAlert } = props;
  const styles = tileStyles;

  return (
    <div className={[className, styles.root].join(' ')}>
      <div className={styles.message}>{message}</div>
      <button className={[styles.button, isButtonAlert?styles.buttonAlert:''].join(' ')}>{buttonLabel}</button>
    </div>
  )
}
