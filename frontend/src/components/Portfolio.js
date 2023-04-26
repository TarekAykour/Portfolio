import React, {useEffect, useState} from "react";
import projectsData from "../../static/data"
import ProjectDiv from "./ProjectDiv";



function Portfolio(){
    const [projects, setProjects] = useState(projectsData)

    useEffect(()=> {
        setProjects(projectsData)
    }, [projects])

    return (
        <div className="portfolio-page" style={{marginTop: '5%', marginBottom: '5%'}}>
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '48px', marginBottom: '50px'}}>
            Portfolio
            <div className="underline" 
            style={{
                backgroundColor: '#df3b30',
                position: 'relative',
                top: '15px',
                transform: 'translateY(0%)',
                transform: 'translateX(5%)'
            }}>
            </div>
            </h2>

            <div className="portfolios" style={{marginTop: '50px'}}>
                {projects.map(project => {
                    return (
                    <ProjectDiv 
                        key={project.id} 
                        description={project.description} 
                        name={project.name} 
                        link={project.link} 
                        images={project.images}
                        technologies = {project.technologies}  
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;