import React from 'react';

const Sidebar = () => {
    return (
        <nav className="sidebar_container">
            <a>KT</a>
            <h3>Front End Developer</h3>
            <div className="sidebar_links">
                <a>Home</a>
                <a>Projects</a>
                <a>Skills & Work</a>
                {/* <a> Resume</a> */}
            </div>
        </nav>
    )
}

export default Sidebar;