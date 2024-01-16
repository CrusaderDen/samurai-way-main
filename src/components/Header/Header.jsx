import React from "react";
import s from './Header.module.css';


function Header () {
   return (
      <header className={s.header}>
            <img
               className={s.applogo}
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
               alt="logo ipsum"
            />
         </header>
   )
}

export default Header