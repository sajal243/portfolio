
"use client"
import React from 'react'
import styles from "../styles/header.module.css"

const Header = () => {

  return (
    <div className={styles.header}>
        <h1 className={styles.left}>Portfolio</h1>
        <nav className={styles.navbar}>
            <div className={styles.right}>
                <div className={styles.item}><a href='#about'>About</a></div>
                <div className={styles.item}><a href='#skills'>Skills</a></div>
                <div className={styles.item}><a href='#projects'>Projects</a></div>
                <div className={styles.item}><a href='#articles'>Articles</a></div>
                <div className={styles.item}><a href='#contact'>Contact</a></div>
            </div>
        </nav>
    </div>
  )
}

export default Header