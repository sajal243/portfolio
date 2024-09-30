import React from 'react'
import styles from "../styles/skills.module.css"

const Skills = () => {
  const SkillsImg = [
    {lang: "html", url: "html5.svg", class:"html"},
    {lang: "css", url: "css.svg"},
    {lang: "js", url: "javascript.svg"},
    {lang: "react", url: "react.svg", class:"react"},
    {lang: "next", url: "nextjs.png", class:"next"},
    {lang: "ts", url: "typescript.svg"},
    {lang: "node", url: "nodejs.svg", class:"node"},
    {lang: "python", url: "python.svg"},
    {lang: "php", url: "php.svg"},
    {lang: "sql", url: "mysql-ar21.svg", class:"sql"},
    {lang: "tw", url: "tailwind-svgrepo-com.svg"},
    {lang: "mz", url: "materialize.png"},
  ]
  return (
    <div id='skills' className={styles.skills}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
          {SkillsImg?.map((item) => <img key={item?.lang} src={item?.url} className={`${styles.icon} ${item?.class ? styles[item.class] : ''}`} alt={item?.lang} /> )}
            
            {/* <i className={`${styles.icon} ${styles.css} `} alt="css" />
            <i className={`${styles.icon} ${styles.js} `} alt="js" />
            <i className={`${styles.icon} ${styles.react} `} alt="react" />
            <i className={`${styles.icon} ${styles.ts} `} alt="typescript" />
            <i className={`${styles.icon} ${styles.next} `} alt="next" />
            <i className={`${styles.icon} ${styles.node} `} alt="node" />
            <i className={`${styles.icon} ${styles.python} `} alt="python" />
            <i className={`${styles.icon} ${styles.php}`} alt="php" /> 
            <i className={`${styles.icon} ${styles.sql} `} alt="sql" />
            <i className={`${styles.icon} ${styles.tw} `} alt="tailwind" />
            <i className={`${styles.icon} ${styles.mz} `} alt="materialize" /> */}
        </div>
    </div>
  )
}

export default Skills