import React from 'react';
import notification from '../../images/notification_icon.svg';
import mail from '../../images/mail_icon.svg';
import Avatar from "../Avatar";

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="logo">
                hussle
            </a>
            <div className="header-body">
                <form className="search">
                    <button className="search__btn" type="submit"/>
                    <input className="text-default search__input" type="text" placeholder="Search for tasks…"/>
                </form>
            </div>

            <div className="profile">
                <button className="profile-notification">
                    <img className="profile-notification__img" src={mail} alt=""/>
                </button>

                <button className="profile-notification notification">
                    <img className="profile-notification__img" src={notification} alt=""/>
                </button>

                <div className="user">
                    <p className="user__name text-default">M. Thompson</p>
                    <Avatar/>
                </div>
            </div>
        </header>
    );
};

export default Header;