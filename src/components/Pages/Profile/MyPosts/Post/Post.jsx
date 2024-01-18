import React from "react"
import s from "./Post.module.css"

function MyPosts(props) {
   return (
      <div className={s.postsList}>
         <img className={s.ava} src="https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg" alt="ava" />
         <div className={s.item}>
            {props.message} - Likes: {props.likesCount}
         </div>
      </div>
   )
}

export default MyPosts
