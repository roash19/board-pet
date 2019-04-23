import React from 'react';
import avatar from "../images/avatar.png";

const Avatar = () => {
    return (
        <div className="avatar">
            <img className="avatar__img" src={avatar} alt="avatar"/>
        </div>
    );
};

export default Avatar;