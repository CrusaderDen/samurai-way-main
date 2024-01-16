import React from "react"
import s from './Navbar.module.css'

function Navbar () {
   return (
      <nav className={s.nav}>
            <div className={s.item}>
               <a href="">Profile</a>
            </div>
            <div className={s.item}>
               Messages
            </div>
            <div className={`${s.item} ${s.active}`}>
              News
            </div>
            <div className={s.item}>
               <a href="">Music</a>
            </div>
            <div className={s.item}>
               <a href="">Settings</a>
            </div>
         </nav>
   )
}

export default Navbar