export const store = {
   //--------------------
   _state: {
      profilePage: {
         posts: [
            {id: 1, message: "Hey boy", likesCount: 4},
            {id: 2, message: "My first post", likesCount: 6},
         ],
         newPostText: "",
      },
      dialogsPage: {
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
         newMessageText: "",
      },
      navbarPage: {
         friends: [
            {
               id: 1,
               avatar: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
               name: "Диман",
            },
            {
               id: 2,
               avatar:
                  "https://masterpiecer-images.s3.yandex.net/fec2be5d968d11eeb6343a7ca4cc1bdc:upscaled",
               name: "Вован",
            },
            {
               id: 3,
               avatar:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vjjKVyV7K2L5aonii1WNkp6iOTYDFy3dlg&usqp=CAU",
               name: "Серега",
            },
         ],
      },
   },
   getState() {
      return this._state
   },
   _callSubscriber() {
      console.log("no subscribers(observers)")
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },

   //--------------------

   // addPost() {
   //    const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 14}
   //    this._state.profilePage.posts.push(newPost)
   //    this._state.profilePage.newPostText = ""
   //    this._callSubscriber(this._state)
   // },
   // updateNewPostText(newText) {
   //    this._state.profilePage.newPostText = newText
   //    this._callSubscriber(this._state)
   // },
   // addMessage() {
   //    const newMessage = {id: 10, message: this._state.dialogsPage.newMessageText}
   //    this._state.dialogsPage.messages.push(newMessage)
   //    this._state.dialogsPage.newMessageText = ""
   //    this._callSubscriber(this._state)
   // },
   // updateNewMessageText(newText) {
   //    this._state.dialogsPage.newMessageText = newText
   //    console.log(newText)
   //    this._callSubscriber(this._state)
   // },
   dispatch(action) {
      switch (action.type) {
         case "ADD-POST":
            const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 14}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
            break
         case "UPDATE-NEW-POST-TEXT":
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
            break
         case "ADD-MESSAGE":
            const newMessage = {id: 10, message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber(this._state)
            break
         case "UPDATE-NEW-MESSAGE-TEXT":
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
            break
         default:
            console.log('Miss action name in store dispatch func')
      }
   },
}

window.testStore = store

/*

export const state = {
   profilePage: {
      posts: [
         {id: 1, message: "Hey boy", likesCount: 4},
         {id: 2, message: "My first post", likesCount: 6},
      ],
      newPostText: '',
   },
   dialogsPage: {
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
      newMessageText: '',
   },
   navbarPage: {
      friends: [
         {
            id: 1,
            avatar: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            name: "Диман",
         },
         {
            id: 2,
            avatar:
               "https://masterpiecer-images.s3.yandex.net/fec2be5d968d11eeb6343a7ca4cc1bdc:upscaled",
            name: "Вован",
         },
         {
            id: 3,
            avatar:
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vjjKVyV7K2L5aonii1WNkp6iOTYDFy3dlg&usqp=CAU",
            name: "Серега",
         },         
      ],
   },
}

export const addPost = () => {
   const newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 14}
   state.profilePage.posts.push(newPost)
   state.profilePage.newPostText=''
   rerenderEntireTree()
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText=newText
   rerenderEntireTree()
}

export const addMessage = () => {
   const newMessage = {id: 10, message: state.dialogsPage.newMessageText}
   state.dialogsPage.messages.push(newMessage)
   state.dialogsPage.newMessageText=''
   rerenderEntireTree()
}

export const updateNewMessageText = (newText) => {
   state.dialogsPage.newMessageText = newText
   rerenderEntireTree()
}

let rerenderEntireTree

export const subscribe = (observer) => {
   rerenderEntireTree=observer
}

*/
