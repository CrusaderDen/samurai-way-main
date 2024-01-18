export const state = {
   profilePage: {
      posts: [
         {id: 1, message: "Hey boy", likesCount: 4},
         {id: 2, message: "My first post", likesCount: 6},
      ],
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