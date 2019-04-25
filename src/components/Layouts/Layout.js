import React from 'react';
import SideNav from "./SideNav";

const Layout = (props) => {
    return (
        <div className="app-body">
            <SideNav/>
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;