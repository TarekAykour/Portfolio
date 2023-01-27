import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import useWindowSize from './useWindowSize'


function Nav(){
    const [open,setOpen] = useState(false)

    const size = useWindowSize();  

  
    
    

    return (
        <div>

        <FontAwesomeIcon onClick={()=> {
            if(open){
                setOpen(false)
            }else {
                setOpen(true)
            }
        }} icon={faBars} size="3x" />

          {
          open ? 
          <nav className={size.width <= 600 ? "nav mobile-nav open" : "nav normal-nav"}>
                <ul className="nav justify-content-center Desktop-Nav">
                    <li onClick={()=> {setOpen(false)}} className="nav-item"><Link to="/">Home</Link></li>
                    <li onClick={()=> {setOpen(false)}} className="nav-item"><Link to="/journey">Journey</Link></li>
                    <li onClick={()=> {setOpen(false)}} className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
                    <li onClick={()=> {setOpen(false)}} className="nav-item"><Link to="/contact">Contact</Link></li>
                    
                </ul>
          </nav>
          :
          <nav className={size.width <= 600 ? "nav mobile-nav closed" : "nav normal-nav"}>
                <ul className="nav justify-content-center Desktop-Nav">
                    <li onClick={()=> {setOpen(false)}} className="nav-item"><Link to="/">Home</Link></li>
                    <li onClick={()=> {setOpen(false)}} className="nav-item"><Link to="/journey">Journey</Link></li>
                    <li onClick={()=> {setOpen(false)}} className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
                    <li onClick={()=> {setOpen(false)}} className="nav-item"><Link to="/contact">Contact</Link></li>
                    
                </ul>
          </nav>
        
        
        }

       
      
    
    

      </div>
              
    )
}


export default Nav