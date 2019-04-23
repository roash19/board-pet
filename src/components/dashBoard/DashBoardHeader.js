import React from 'react';
import Avatar from "../Avatar";

const DashBoardHeader = () => {
    return (
        <div className="dashBoard-header">
            <div className="select-project">
                <p className="select-project__text">Studio Board</p>
                <button className="select-project__btn"/>
            </div>

            <div className="dashBoard-users">
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
            </div>
        </div>
    );
};

export default DashBoardHeader;