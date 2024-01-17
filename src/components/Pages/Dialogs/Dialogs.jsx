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
   const dialogsData = [
      {id: 1, name: "Диман"},
      {id: 2, name: "Вован"},
      {id: 3, name: "Денис"},
      {id: 4, name: "Катя"},
   ] 

   const dialogsElements = dialogsData
   .map((dialog)=><DialogItem name={dialog.name} id={dialog.id} />)

   const messagesData = [
      {id: 1, message: "Hi"},
      {id: 2, message: "How is your it-kamasutra"},
      {id: 3, message: "Yo yo"},
      {id: 4, message: "Хочу спать"},
   ]
   const messagesElements = messagesData
   .map((message)=><Message message={message.message} id={message.id} />)
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs
