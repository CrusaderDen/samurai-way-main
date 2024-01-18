import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/PofileInfo"

function Profile(props) {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={props.state.posts} />
      </div>
   )
}

export default Profile
