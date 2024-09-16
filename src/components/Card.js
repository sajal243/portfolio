import React from 'react'
import styles from "../styles/card.module.css"

const Card = ({type="", name, url, imgUrl, tech=""}) => {
  return (
    <div className={styles.card}>
        <a href={url}>
            <img className={styles.img} src={imgUrl} />
            <p className={styles.name}>{name}</p>
            {type !== "article" ? <p className={styles.tech}><span >Tech Stack: </span>{tech}</p> : "" }
        </a>
    </div>
  )
}

export default Card