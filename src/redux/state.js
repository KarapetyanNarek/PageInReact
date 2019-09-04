let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 11 },
            { id: 3, message: 'Blabla', likesCount: 7 },
            { id: 4, message: 'Dada', likesCount: 1 }
        ],

        newPostText: 'GamGam'
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ]
    }
};


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
} 

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;

