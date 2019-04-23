import React from 'react';
import { NavLink  } from "react-router-dom";
import group from '../images/group_icon.svg';
import dns from '../images/dns_icon.svg';
import event_note from '../images/event_note_icon.svg';
import chart from '../images/chart_icon.svg';

const SideNav = () => {
    return (
        <nav className="side-nav">
            <NavLink className="side-nav__link" to="/manage">
                <img src={group} alt=""/>
                <p className="side-nav__text text-default">Manage</p>
            </NavLink >

            <NavLink className="side-nav__link" to="/" exact>
                <img src={dns} alt=""/>
                <p className="side-nav__text text-default">Boards</p>
            </NavLink >

            <NavLink className="side-nav__link" to="/schedule">
                <img src={event_note} alt=""/>
                <p className="side-nav__text text-default">Schedule</p>
            </NavLink >

            <NavLink className="side-nav__link" to="/reports">
                <img src={chart} alt=""/>
                <p className="side-nav__text text-default">Reports</p>
            </NavLink >
        </nav>
    );
};

export default SideNav;