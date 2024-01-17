import React from "react"
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

function MyPosts() {
   const postData = [
      {id: 1, message: "Hey boy", likesCount: 4,},
      {id: 2, message: "My first post", likesCount: 6,},
   ]

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
            <Post message={postData[0].message} likesCount={postData[0].likesCount} />
            <Post message={postData[1].message} likesCount={postData[1].likesCount} />
         </div>
      </div>
   )
}

export default MyPosts
