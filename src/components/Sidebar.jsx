import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="sidebar_container">
            <div className="initials">KT</div>
            <h3>Front End Developer</h3>
            <div className="sidebar_links">
                <Link to="/main">Home</Link>
                <Link to='/main/projects'>Projects</Link>
                <Link to="/main/skills">Skills & Work</Link>
            </div>
        </nav>
    )
}

export default Sidebar;