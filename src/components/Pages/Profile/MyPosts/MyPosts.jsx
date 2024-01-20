import React from "react"
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import {addPostActionCreator} from './../../../../redux/state'
import {updateNewPostTextActionCreator} from './../../../../redux/state'




function MyPosts(props) {
   const postsElements = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount} />)
   
   const newPostElement = React.createRef()

   const addPost = () => {
      props.dispatch(addPostActionCreator())
   } 

   const onPostChange = () => {
      let text = newPostElement.current.value
      let action = updateNewPostTextActionCreator(text)
      props.dispatch(action)
   }

   return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
         <div> 
            <div>
               <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
               <button onClick={addPost}>Добавить пост</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts
