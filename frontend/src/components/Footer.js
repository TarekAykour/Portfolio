import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"


function Footer(){
    return (
        <footer>
            <ul>
                <li><a href="mailto: tarekaykourbusiness@outlook.com"><FontAwesomeIcon size="2x" style={{color: 'white', textAlign: 'center'}} icon={faEnvelope}/></a></li>
                <li><a href="https://github.com/TarekAykour"><FontAwesomeIcon size="2x" style={{color: 'white', textAlign: 'center'}} icon={faGithub}/></a></li>
                <li><a href="https://www.linkedin.com/in/tarekaykour/"><FontAwesomeIcon style={{color: 'white', textAlign: 'center'}} size="2x" icon={faLinkedin}/></a></li>
            </ul>
        </footer>
    )
}


export default Footer