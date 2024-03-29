import React from "react"
import "./App.css"
import {Route, BrowserRouter, Switch} from "react-router-dom"

import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Pages/Profile/Profile"
import Dialogs from "./components/Pages/Dialogs/Dialogs"
import News from "./components/Pages/News/News"
import Music from "./components/Pages/Music/Music"
import Settings from "./components/Pages/Settings/Settings"

function App(props) {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar state={props.state.navbarPage} />
            <div className="app-wrapper-content">
               <Switch>
                  <Route path={"/dialogs"}>
                     <Dialogs
                        state={props.state.dialogsPage}
                        dispatch={props.dispatch}
                     />
                  </Route>
                  <Route path={"/profile"}>
                     <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                     />
                  </Route>
                  <Route path={"/news"} component={News} />
                  <Route path={"/music"} component={Music} />
                  <Route path={"/settings"} component={Settings} />
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
