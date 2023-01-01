import React from "react";
import projects from "../../static/data"
import ProjectDiv from "./ProjectDiv";


console.log(projects)
function Portfolio(){
    return (
        <div className="portfolio-page" style={{marginTop: '5%'}}>
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '48px'}}>
            Portfolio
            <div className="underline"></div>
            </h2>
            <div className="portfolios">
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