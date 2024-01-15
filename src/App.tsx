import React from "react"
import "./App.css"
import Header from "./components/Header"

function App() {
   return (
      <div className="app-wrapper">
         <Header/>
         <nav className="nav">
            <div>
               <a href="">Profile</a>
            </div>
            <div>
               <a href="">Messages</a>
            </div>
            <div>
               <a href="">News</a>
            </div>
            <div>
               <a href="">Music</a>
            </div>
            <div>
               <a href="">Settings</a>
            </div>
         </nav>
         <div className="content">
            <div>
               <img
                  src="https://images.unsplash.com/photo-1603477849227-705c424d1d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="beach"
               />
            </div>
            <div>
               {/* <img src="https://ir-3.ozone.ru/s3/multimedia-6/c1000/6167043714.jpg" alt="cat" /> */}
               <div>Description</div>
            </div>
            <div>My posts
               <div>New posts</div>
               <div>
                  <div>Post 1</div>
                  <div>Post 2</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
