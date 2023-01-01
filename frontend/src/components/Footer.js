import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


function Footer(){
    return (
        <footer>
            <ul>
                <li><a href="https://github.com/TarekAykour"><FontAwesomeIcon size="2x" style={{color: 'white', textAlign: 'center'}} icon={faGithub}/></a></li>
            </ul>
        </footer>
    )
}


export default Footer