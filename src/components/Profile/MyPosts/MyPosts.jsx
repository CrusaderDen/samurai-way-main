import React from "react"
import Post from './Post/Post'
import s from'./MyPosts.module.css'

function MyPosts () {
   return (
            <div>My posts
               <div>New posts</div>
               <div className={s.posts}>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
               </div>
            </div>
   )
}

export default MyPosts