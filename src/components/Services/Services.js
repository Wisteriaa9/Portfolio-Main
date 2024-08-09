import React,{useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { servicesData } from '../../data/servicesData';
import './Services.css'
import SingleService from './SingleService/SingleService';

function Services() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {servicesData.length > 0 && (
                <div className="services" id="services" style={{backgroundColor:theme.secondary}}>
                    <div className="services-header">
                        <h1 style={{color: theme.primary}}></h1>
                    </div>
                    <div className="services-body">
                        <p style={{color:theme.tertiary80}}>
                        <h3 style={{color: theme.primary}}>Technical Skills </h3>
                         C++, Python, MySQL, MATLAB, HTML, CSS, Java script, Noje.JS, ReactJS, R programming language, MongoDB, Angular, JAVA, Spring Boot.
                        </p>
                        <p style={{color:theme.tertiary80}}>
                        <h3 style={{color: theme.primary}}>Tools </h3>
                        VS Code, GNS3, AutoCAD, Git
                        </p>
                        < p style={{color:theme.tertiary80}}>
                        <h3 style={{color: theme.primary}}>Relevant Coursework </h3>
                        DSA, Design and analysis of algorithms, AI, ML, DBMS, OOPs, OS, Cloud Computing, Engineering Drawing, Software Engineering, Computer Networks, Computer architecture and organization, Optimization Techniques, Probability and Statistics, Compiler Design, Quantum Computing
                        </p>
                        <p style={{color:theme.tertiary80}}><h3 style={{color: theme.primary}}>Soft Skills </h3> 
                        Problem solving, Self-motivated, Active listener, Excellent communication, Team building
                        </p>
                        <p style={{color:theme.tertiary80}}>
                        <h3 style={{color: theme.primary}}>Languages known </h3> 
                        English, Hindi, Punjabi   
                        </p>
                        
                        <div className="services-bodycontainer">
                            {servicesData.map(services => (
                                <SingleService
                                key={services.id}
                                id={services.id}
                                title={services.title}
                                icon={services.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
       </>
    )
}

export default Services
