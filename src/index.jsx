import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';


const data = {
dialogs: [
   {id: 1, name: "Диман"},
   {id: 2, name: "Вован"},
   {id: 3, name: "Денис"},
   {id: 4, name: "Катя"},
],
messages: [
   {id: 1, message: "Hi"},
   {id: 2, message: "How is your it-kamasutra"},
   {id: 3, message: "Yo yo"},
   {id: 4, message: "Хочу спать"},
],
posts: [
   {id: 1, message: "Hey boy", likesCount: 4,},
   {id: 2, message: "My first post", likesCount: 6,},
],
}

ReactDOM.render(
    <App dialogs={data.dialogs} messages={data.messages} posts={data.posts} />,
  document.getElementById('root')
);
