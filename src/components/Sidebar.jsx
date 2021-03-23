import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="sidebar_container">
            <div className="initials">KT</div>
            <h3>Front End Developer</h3>
            <div className="sidebar_links">
                <Link to="/portfolio/main">Home</Link>
                <Link to='/portfolio/main/projects'>Projects</Link>
                <Link to="/portfolio/main/skills">Skills & Work</Link>
            </div>
        </nav>
    )
}

export default Sidebar;