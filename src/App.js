import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar />
      <div>
      <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );

}

export default App;
