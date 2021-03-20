import React from 'react';
import SideBar from './Sidebar';
import Projects from './Projects';
import GitHubLink from './GitHubLink';

const Main = () => {
    return (
        <div className="main_container">
        <GitHubLink/>
        <SideBar/>
        <Projects/>
        </div>
    )
}

export default Main;