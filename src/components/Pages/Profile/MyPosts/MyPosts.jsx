import React from "react"
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

function MyPosts() {
   return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
         <div>
            <div>
               <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
               <button>Добавить пост</button>
            </div>
         </div>
         <div className={s.posts}>
            <Post message="Hey boy" />
            <Post message="My first post" />
         </div>
      </div>
   )
}

export default MyPosts
