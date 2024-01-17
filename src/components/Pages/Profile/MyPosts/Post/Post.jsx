import React from "react"
import s from "./Post.module.css"

function MyPosts(props) {
   return <div className={s.item}>{props.message}   - Likes: {props.likesCount}</div>
}

export default MyPosts
