import React from "react"
import s from "./Friends.module.css"
import Friend from "./Friend/Friend"

function Friends(props) {

   const fiendElement = props.state.map(f=><Friend avatar={f.avatar} name={f.name}/>)

   return (
      <div className={s.friends}>
         <h3>Friends</h3>
         <div className={s.friendsInfo}>
            {fiendElement}
         </div>
      </div>
   )
}

export default Friends
