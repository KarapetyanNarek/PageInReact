import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4Y_m6SbMztUGALvkh5HQ5lMzuxVPY4Bu6YGmsL8PrV9i8_gDIw' />
                +description
             </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className='posts'>
                    <div className='item'>
                        post 1
                    </div>
                    <div className='item'>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;