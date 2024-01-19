import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"
import {state, subscribe} from "./redux/state"
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from "./redux/state"



const rerenderEntireTree = () => {
   ReactDOM.render(
      <App
         state={state}
         addPost={addPost}
         updateNewPostText={updateNewPostText}
         addMessage={addMessage}
         updateNewMessageText={updateNewMessageText}
      />,
      document.getElementById("root")
   )
}

rerenderEntireTree()

subscribe(rerenderEntireTree)