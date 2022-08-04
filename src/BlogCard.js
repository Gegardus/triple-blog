import React from "react"
import { dumpLogs } from './Utils'
import classes from './BlogCard.module.css'

const BlogCard = (props) => {
      dumpLogs(props)
       return (
        <div className={classes.BlogCard}>
          <h3>{props.title}</h3>
          <p>{props.descreption}</p>
          
          <p>Likes Count: <span className={classes.countLikes}>{props.countLikes}</span></p>
          <button onClick={ props.addLikeOnClick }>Like</button>
        </div>
      )  
}

export default BlogCard;