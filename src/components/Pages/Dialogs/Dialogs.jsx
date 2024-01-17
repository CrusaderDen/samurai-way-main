import React from "react"
import s from "./Dialogs.module.css"

function Dialogs() {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog}>Диман</div>
            <div className={s.dialog}>Вован</div>
            <div className={s.dialog + ' ' + s.active}>Денис</div>
            <div className={s.dialog}>Катя</div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How is your it-kamasutra</div>
            <div className={s.message}>Yo yo</div>
         </div>
      </div>
   )
}

export default Dialogs
