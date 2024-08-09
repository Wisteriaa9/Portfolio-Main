import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import './Social.css';
import { socialEndData } from '../../data/socialEndData'
import Socialcard from './Socialcard';

function SocialEndeavor() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Social Endeavor</h1>
                    {socialEndData.map(exp =>(
                        <Socialcard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            image={exp.image}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default SocialEndeavor
