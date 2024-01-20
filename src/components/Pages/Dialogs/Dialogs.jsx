import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import {addMessageActionCreator} from './../../../redux/state'
import {updateNewMessageActionCreator} from './../../../redux/state'


function Dialogs(props) {
   const dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
   const messagesElements = props.state.messages.map((m) => (
      <Message message={m.message} id={m.id} />
   ))

   const newMessageElement = React.createRef()

   function addMessage() {
      props.dispatch(addMessageActionCreator())
   }

   function onMessageChange() {
      const text = newMessageElement.current.value
      props.dispatch(updateNewMessageActionCreator(text))
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>{dialogsElements}</div>
         <div className={s.messages}>{messagesElements}</div>
         <div>
            <textarea
               onChange={onMessageChange}
               ref={newMessageElement}
               cols="50"
               rows="5"
               value={props.state.newMessageText}
            ></textarea>
            <button onClick={addMessage}>Add message</button>
         </div>
      </div>
   )
}

export default Dialogs
