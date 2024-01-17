import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

function DialogItem(props) {
   const path = "/dialogs/" + props.id
   return (
      <div className={s.dialog + " " + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

function Message(props) {
   return <div className={s.message}>{props.message}</div>
}

function Dialogs(props) {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name="Диман" id="1" />
            <DialogItem name="Вован" id="2" />
            <DialogItem name="Денис" id="3" />
            <DialogItem name="Катя" id="4" />
         </div>
         <div className={s.messages}>
            <Message message="Hi" />
            <Message message="How is your it-kamasutra" />
            <Message message="Yo yo" />
         </div>
      </div>
   )
}

export default Dialogs
