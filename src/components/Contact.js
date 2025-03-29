import React from 'react'
import styles from "../styles/contact.module.css";
import { Email, GitHub, Phone } from '@mui/icons-material';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { stepLabelClasses } from '@mui/material';

const Contact = () => {
  return (
    <div id='contact' className={styles.contact}>
        <div className={styles.left}>
            <h1>Contact</h1>
            <p>Feel free to reach out</p>
        </div>

        <div className={styles.right}>
            <div className={styles.info}> <Email/>  its.sajalgupta24@gmail.com</div>
            <div className={styles.info}> <Phone/>  +91-8077043974</div>
            <div className={styles.info}><a href='https://www.linkedin.com/in/sajal-gupta-dev/'> <LinkedIn/>  LinkedIn </a></div>
            <div className={styles.info}><a href='https://github.com/sajal243/'> <GitHub/>  GitHub </a></div>
        </div>
    </div>
  )
}

export default Contact