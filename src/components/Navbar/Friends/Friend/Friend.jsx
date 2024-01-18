import React from "react"
import s from "./Friend.module.css"

function Friend(props) {
   return (
      <div className={s.friend}>
         <img
            className={s.friendsAvatar}
            src={props.avatar}
            alt="ava"
         />
         <div>{props.name}</div>
      </div>
   )
}

export default Friend
