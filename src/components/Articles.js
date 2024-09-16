import React from 'react'
import styles from "../styles/articles.module.css"
import Card from './Card'

const Articles = () => {

    const articles = [
        {
            id: "0",
            name: "How to Deploy React App",
            url: "https://www.linkedin.com/pulse/how-deploy-react-app-sajal-gupta-c7acc/",
            imgUrl: "/deploy.png",
            tech: "HTML5, CSS3, JavaScript, React.js"
        },
        {
            id: "1",
            name: "Shortest React App",
            url: "https://www.geeksforgeeks.org/shortest-react-app/",
            imgUrl: "/react-app.png",
            tech: "HTML5, SCSS, JavaScript, Next.js "
        },
        {
            id: "2",
            name: "Accelerated Mobile Pages",
            url: "https://www.geeksforgeeks.org/accelerated-mobile-pages-amp-pages/",
            imgUrl: "/amp.png",
            tech: "HTML5, CSS3, JavaScript, React.js"
        },
        
    ]
  return (
    <div id='articles' className={styles.articles}>
        <h1>Articles</h1>
        <div className={styles.articleDiv}>
            {articles?.map((item) => {
                return (
                    <Card key={item?.id} type={"article"} name={item?.name} url={item?.url} imgUrl={item?.imgUrl}  />
                )
            })}
        </div>

    </div>
  )
}

export default Articles