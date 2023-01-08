import React from "react";
import Typical from "react-typical"
import Contact from "./Contact";
import Journey from "./Journey";


function Home(){

        
    return (
        <div className="Home">
        <div class="cc">
                <div class="left-container" >
                <div class="ml11 text">
                    <span className="text-wrapper">
                        <span className="line line1"></span>
                    <h1 className="letters" style={{fontWeight: 'bold'}}>Tarek Aykour</h1>
                    </span>
                </div>
                <Typical  steps={['<h1>About me</h1>', 2000, 
                `<p> I am a 21-year old web developer from The Netherlands.\v I have been learning web development since March, 2020 and have failed miserabely. But after some courses, projects, crying and a lot of hard work i managed to become a 'professional' in the field.                                                    As my hobby stack i've got: reading (primarly science related books such as 'al-muqadimmah' by Ibn Khaldun or 'The rise and fall of the great powers' by Paul Kennedy), running, calisthenics and learning new skills</p>`
                , 500
                
                ]} />
                <a href="/portfolio" class='btn btn-primary'>See projects</a>
                </div>
                <div class="image-container">
                        <h1>Skills<div class="skills"></div></h1>
                        <div className="skills-images">
                            <div class="frontend">
                            <div class="img-list">
                                <img id='1'src="../../static/images/html.png"></img>
                                <img id='2'src="../../static/images/css.png"></img>
                                <img id='3'src="../../static/images/javscript.png"></img>
                                <img id='4'src="../../static/images/react.png"></img>
                                <img id='5'src="../../static/images/bootstrap.png"></img>
                            </div>
                            </div>
                            <div class="backend">
                                <img src="../../static/images/python.png"></img>
                                <img src="../../static/images/django.png"></img>
                                <img src="../../static/images/nodejs.png"></img>
                                <img src="../../static/images/sql.png"></img>
                                <img src="../../static/images/mongodb.png"></img>
                            </div>
                            <div class="Other">
                                <img src="../../static/images/git.png"></img>
                            </div>
                        </div>
                </div>
            </div>
            <Journey/>
            <Contact/>
            </div>
    )
}






export default Home;