"use client"
import React from 'react'
import styles from "../styles/about.module.css"

const About = () => {

    const points = [
        "Fullstack Web Developer with 2+ years of experience, proficient in HTML5, CSS3, JavaScript, React.js, Next.js, Python, and SQL, delivering both frontend and backend solutions.",
        "Problem-Solving Expert, having tackled over 700 coding challenges on LeetCode and GeeksforGeeks, demonstrating strong analytical and algorithmic skills.",
        "Content Creator with a track record of writing insightful web development articles, sharing knowledge and staying current with industry trends.",
        "Award-Winning Developer, honored with a silver certificate at the Bootathon organized by IIT Bombay and MHRD for exceptional project contributions.",
        "Outdoor Sports Enthusiast who brings teamwork and strategic thinking from the field into development projects."
    ]

  return (
    <div id='about' className={styles.about}>
        <div className={styles.left}>
            <div className={styles.aboutImg}></div>
        </div>
        <div className={styles.right}>
            <h1>About Me</h1>

            <ul className={styles.list}>
                {points?.map((point, index) => {
                    return (
                        <li key={index} className={styles.listItem}>{point} </li>
                    )
                })}
            </ul>

        </div>
    </div>
  )
}

export default About