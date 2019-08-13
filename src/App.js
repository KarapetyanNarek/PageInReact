import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://cdn.shopifycloud.com/hatchful-web/assets/c3a241ae6d1e03513dfed6f5061f4a4b.png'/>
      </header>
      <nav className='nav'>
        <div><a href='#'>Profile</a></div>
        <div><div><a href='#'>Messages</a></div></div>
        <div><a href='#'>News</a></div>
        <div><a href='#'>Music</a></div>
        <div><a href='#'>Settings</a></div>
      </nav>
      <div className='content'>
        <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
        </div>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4Y_m6SbMztUGALvkh5HQ5lMzuxVPY4Bu6YGmsL8PrV9i8_gDIw'/>
          +description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
