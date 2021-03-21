import React from 'react';
import Work from './Work';

const Skills = () => {
    return (
        <div className="skills_container">
         <Work/>
         <div className="work_react">React</div>
         <div className="work_redux">Redux</div>
         <div className="work_ts">TypeScript</div>
         <div className="work_js">JavaScript</div>
         <div className="work_node">Node</div>
         <div className="work_stcmp">StyledComponents</div>
         <div className="work_scss">SCSS</div>
         <div className="work_git">Git</div>
        </div>
    )
}

export default Skills;