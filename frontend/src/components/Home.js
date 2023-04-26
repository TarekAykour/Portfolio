import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import Journey from "./Journey";
import projectsData from "../../static/data"
import ProjectDiv from "./ProjectDiv";



// The projects are not loading in correctly, change this! 19-4-23 11:12!!
function Home(){
    const [projects, setProjects] = useState([projectsData])
    
    useEffect(()=> {
        setProjects(projectsData)
    }, [projects])
    return (
        <div className="Home">
                <div class="left-container" >
                <div class="ml11 text">
                    <span className="text-wrapper">
                        <span className="line line1"></span>
                    <h1 className="letters" style={{fontWeight: 'bold'}}>Tarek Aykour</h1>
                    </span>
                </div>
                <p>
                I am a 21 year old web developer from The Netherlands.
                I have been learning web development since March, 2020 and have failed miserabely. 
                But after some courses, projects, a lot of crying and hard work i managed to become a 'professional' in the field.
                As my hobby stack i've got: reading (primarly science related books such as 'al-muqadimmah' by Ibn Khaldun or 
                'The rise and fall of the great powers' by Paul Kennedy or 'A brief history of time' by the legendary Stephen Hawking), running, calisthenics and learning new skills
                </p>
                <a href="/portfolio" class='btn btn-primary'>See projects</a>
                </div>
                <div class="image-container" style={{marginBottom: '150px'}}>
                        <h1 style={{color: 'white'}}>Skills<div className="underline" 
                            style={{
                                backgroundColor: '#df3b30',
                                position: 'relative',
                                left: '50%',
                                transform: 'translateX(-50%)'
                            }}></div>
                        </h1>
                        <div className="skills-images">
                            <div class="frontend">
                            <h2 style={{color:'white'}}>Frontend<div className="skills"></div></h2>
                            <div class="frontend-images">
                                <img id='1'src="../../static/images/html.png"></img>
                                <img id='2'src="../../static/images/css.png"></img>
                                <img id='3'src="../../static/images/javscript.png"></img>
                                <img id='4'src="../../static/images/react.png"></img>
                                <img id='5'src="../../static/images/bootstrap.png"></img>
                            </div>
                            </div>
                            <div class="backend">
                            <h2 style={{color:'white'}}>Backend<div className="skills"></div></h2>
                            <div className="other-images">
                                <img src="../../static/images/python.png"></img>
                                <img src="../../static/images/django.png"></img>
                                <img src="../../static/images/nodejs.png"></img>
                                <img src="../../static/images/sql.png"></img>
                                <img src="../../static/images/mongodb.png"></img>
                            </div>
                            </div>
                            <div class="Other">
                            <h2 style={{color:'white'}}>Other<div className="skills"></div></h2>
                            <div className="other-images">
                                <img src="../../static/images/git.png"></img>
                                <img src="../../static/images/Docker.png"></img>
                                <img src="../../static/images/aws.png"></img>
                            </div>
                            </div>
                        </div>
                </div>
            
            <div className="portfolio-preview-page" style={{marginTop: '50px'}}>
                <h2 style={{
                color: 'white', 
                textAlign: 'center',
                fontWeight: 'bold', 
                fontSize: '48px',
                }}>Portfolio<div className="underline" style={{
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)'
            }}></div></h2>
            <div className="portfolio-preview">  
                {projects.splice(4,2).map(project => {
                    return (
                    <div className="portfolio-preview-div"  style={{
                        color: "red",
                        margin: '25px',
                        width: '100%',
                        }}>
                         <div className="bar">
                            <div className="cicrlces">
                                <div className="red"></div>
                                <div className="orange"></div>
                                <div className="green"></div>
                            </div>
                            <div className="searchbar">
                                {project.name}
                            </div>
                        </div>
                        <a  href="/portfolio">
                        <div
                        style={{
                            background: `url(../../static/images/${project.images[1]})`,
                            width: '100%',
                            height: '500px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        ></div>
                        </a>
                    </div>
                   
                    )
                })}

            </div>
            </div>
            <Contact/>
            
            </div>
    )
}






export default Home;