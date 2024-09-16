import React from 'react'
import styles from '../styles/main.module.css'
import TypewriterComp from './Typewriter'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ParticlesBackground from './Particles';
import { CloudDownload } from '@mui/icons-material';

const Main = () => {
  return (
    <div className={styles.main}>
        <ParticlesBackground/>
        <div className={styles.left}>
            <TypewriterComp/>
            <p className={styles.info}>I'm a highly skilled Software Engineer with 2+ Years of experience in modern technologies like React JS, Node JS. I have a strong track record in building user-friendly web applications, optimizing performance, and collaborating with cross-functional teams to achieve business goals. I'm eager to contribute my expertise to the team and help drive innovation and success.</p>
            <div className={styles.codingProfiles}>
                <a className={styles.downloadBtn} target='_blank' href='https://docs.google.com/document/d/14Q5K0NxNjixqrHYQ3Rsgro5CVu8pTtYM/edit?usp=sharing&ouid=103418636671154648145&rtpof=true&sd=true' download>{"Download Resume"}<CloudDownload/></a>
                <a href={"https://auth.geeksforgeeks.org/user/sajalgupta243/practice/"} target="_blank"><img className={styles.logo} src={"https://media.geeksforgeeks.org/gfg-gg-logo.svg"} alt="GfG" /> </a>
                <a href={"https://leetcode.com/SajalGupta/"} target="_blank"><img className={styles.logo} src={"https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png"} alt="leetcode" /></a>
            </div>
            
            <div className={styles.socials}>
                
                <a href='https://www.linkedin.com/in/sajal-gupta-dev/' target='_blank'>
                    <LinkedInIcon className={styles.icon}/>
                </a>
                <a href='https://github.com/sajal243/' target='_blank'>
                    <GitHubIcon className={styles.icon}/>
                </a>
                <a href='#' target='_blank'>
                    <InstagramIcon className={styles.icon}/>
                </a>
                
            </div>
        </div>
        
        <div className={styles.right}>
            <div className={styles.devImg}></div>
            {/* <img alt='developer_img' className={styles.devImg} /> */}
        </div>

        

        
    </div>
  )
}

export default Main;