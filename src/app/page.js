import styles from "./page.module.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Main/>
      <About/>
      <Skills/>
      <Project/>
      <Articles/>
      <Contact/>
    </div>
  );
}
