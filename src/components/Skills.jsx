import React from 'react';
import Work from './Work';

const Skills = () => {
    return (
        <div className="skills_container">
         <Work/>
         <div className="work react">{"<React />"}</div>
         <div className="work redux">{"<Redux/>"}</div>
         <div className="work ts">{"<TypeScript/>"}</div>
         <div className="work js">{"<JavaScript/>"}</div>
         <div className="work node">{"<Node/>"}</div>
         <div className="work jest">{"<Jest/>"}</div>
         <div className="work sass">{"<Sass/>"}</div>
         <div className="work git">{"<Git/>"}</div>
         <div className="work react_router">{"<ReactRouter/>"}</div>
        </div>
    )
}

export default Skills;