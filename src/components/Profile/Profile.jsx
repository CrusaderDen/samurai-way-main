import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"

function Profile() {
   return (
      <div className={s.content}>
         <div>
            <img className={s.profile_Img}
               src="https://images.unsplash.com/photo-1603477849227-705c424d1d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D"
               alt="beach"
            />
         </div>
         <div>
            {/* <img src="https://ir-3.ozone.ru/s3/multimedia-6/c1000/6167043714.jpg" alt="cat" /> */}
            <div>Description</div>
         </div>
         <MyPosts />
      </div>
   )
}

export default Profile
