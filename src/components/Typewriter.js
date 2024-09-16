
"use client";
import Typewriter from 'typewriter-effect';
import styles from "../styles/Typrewrite.module.css"

const TypewriterComp = () => (
  <div className={styles.container}>
    <Typewriter
      options={{
        strings: [`Hello, This is <span style="color: yellow;"> Sajal Gupta </span>`, `I am a <span style="color: yellow;">fullstack web developer</span>`],
        autoStart: true,
        loop: true,
        wrapperClassName: styles.typewriterCursor,
      }}
    />
  </div>
 
);

export default TypewriterComp;
