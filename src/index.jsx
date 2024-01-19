import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"
import {store} from "./redux/state"
// import {state, subscribe} from "./redux/state"
// import {addPost, updateNewPostText, addMessage, updateNewMessageText} from "./redux/state"



const rerenderEntireTree = () => {
   ReactDOM.render(
      <App
         state={store.getState()}
         addPost={store.addPost}
         updateNewPostText={store.updateNewPostText}
         addMessage={store.addMessage}
         updateNewMessageText={store.updateNewMessageText}
      />,
      document.getElementById("root")
   )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)