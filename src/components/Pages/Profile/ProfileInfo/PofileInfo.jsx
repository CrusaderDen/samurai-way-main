import React from "react"
import s from './ProfileInfo.module.css'

function ProfileInfo() {
   return (
      <div>
         <div>
            <img
               className={s.profile_Img}
               src="https://images.unsplash.com/photo-1603477849227-705c424d1d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D"
               alt="beach"
            />
         </div>
         <div className={s.descriptionBlock}>Ava + Description</div>
      </div>
   )
}

export default ProfileInfo
