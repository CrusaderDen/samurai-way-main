import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"
import {store} from "./redux/state"
// import {state, subscribe} from "./redux/state"
// import {addPost, updateNewPostText, addMessage, updateNewMessageText} from "./redux/state"



const rerenderEntireTree = (state) => {
   ReactDOM.render(
      <App
         state={state}
         dispatch={store.dispatch.bind(store)}
      />,
      document.getElementById("root")
   )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)