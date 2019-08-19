import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div className = {s.descriptionBlock}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4Y_m6SbMztUGALvkh5HQ5lMzuxVPY4Bu6YGmsL8PrV9i8_gDIw' />
                +description
             </div>
        </div>
    );
}

export default ProfileInfo;