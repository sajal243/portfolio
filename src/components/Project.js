import React from 'react'
import styes from "../styles/project.module.css"
import Card from './Card'

const Project = () => {

    const projects = [
        {
            id: "0",
            name: "Trending App",
            url: "https://www.geeksforgeeks.org/trending/",
            imgUrl: "/trending.png",
            tech: "HTML5, SCSS, JavaScript, Next.js "
        },
        {
            id: "1",
            name: "Todo App",
            url: "https://sajal243.github.io/my-todo-app/",
            imgUrl: "/todo.png",
            tech: "HTML5, CSS3, JavaScript, React.js"
        },
        {
            id: "2",
            name: "Contact App",
            url: "https://sajal243.github.io/ManageContactApp/",
            imgUrl: "/contact_app.png",
            tech: "HTML5, CSS3, JavaScript, React.js"
        },
    ]

  return (
    <div id='projects' className={styes.project}>
        <h1>Projects</h1>
        <div className={styes.projectDiv}>
            {projects?.map((item) => {
                return (
                    <Card key={item.id} name={item?.name} url={item?.url} imgUrl={item?.imgUrl} tech={item?.tech} />
                )
            })}
            
        </div>
    </div>
  )
}

export default Project