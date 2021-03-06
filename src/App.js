import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          {/* exact */}
          {/* <Route path = '/profile' component = {Profile} />
          <Route path = '/dialogs' component = {Dialogs} />
          <Route path = '/news' component = {News} />
          <Route path = '/music' component = {Music} />
          <Route path = '/settings' component = {Settings} /> */}

          <Route path='/profile' render={() => <Profile
            postData={props.state.profilePage.postData}
            addPost={props.addPost}
            newPostText={props.state.profilePage.newPostText}
            updateNewPostText={props.updateNewPostText} />} />
          <Route path='/dialogs' render={() => <Dialogs
            dialogsData={props.state.dialogsPage.dialogsData}
            messagesData={props.state.dialogsPage.messagesData} />} />
          <Route path='/news' redner={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
