import React, {useState} from "react";
import CSRFToken from "./csrftoken"
import {useHistory} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Contact(){
    // states
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()
    const [error, setError] = useState()

    const history = useHistory()
    // csrf token
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    //get csrf
    const csrftoken = getCookie('csrftoken');

    //handlechange
    const handleChange = (event) => {
        if(event.target.name === "name"){
            setName(event.target.value)
        }
        else if(event.target.name === "email"){
            setEmail(event.target.value)
        }
        else if(event.target.name === "subject"){
            setSubject(event.target.value)
        }
        else if(event.target.name === "message"){
            setMessage(event.target.value)
        }
    }

    //handlesubmit
    const handleSubmit = (event) => {
        fetch('/api/send_email', {
            credentials:'include', 
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'X-CSRFToken': csrftoken,
                
                
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
        })
        .then(res => {
            if(!res.ok) {
                return res.text().then(text => { throw new Error(text) })
             }
            else {
             setError('successfully send!')
             return res.json();
           }    
          })
          .catch(err => {
             setError(JSON.parse(err.message)["error"]);
          });

          
        event.preventDefault()
        setTimeout(function(){
            setError()
        },5000)
        
    }



    return (
        <div className="forms">
            <h2 style={{
                color: 'white', 
                fontWeight: 'bold', 
                fontSize: '48px',
                textAlign: 'center'
                }}>
            Contact
            <div className="underline" style={{
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)'
            }}></div>
            </h2>
            <div className="form-section">
            <form onSubmit={handleSubmit}>
                <CSRFToken/>
                <div className="name-and-email">
                <div class="form-group">
                <label className="label">Fill Name *</label>
                <input className="form-control" type="text" name="name" placeholder="input name" onChange={handleChange}></input>
                </div>
                <div class="form-group">
                <label>Select Email*</label>
                <input className="form-control" type="email" name="email" placeholder="input email"  onChange={handleChange}></input>
                </div>
                </div>
                <div class="form-group">
                <label className="label">Fill subject *</label>
                <input className="form-control" type="text" name="subject" placeholder="input subject" onChange={handleChange}></input>
                </div>
                <div class="form-group">
                <label className="label">Fill message *</label>
                <textarea className="form-control" type="text" name="message" placeholder="input message" onChange={handleChange}></textarea>
                </div>
                {error ? <p className="alert alert-danger" role="alert">{error}</p> : ''}
                <input type="submit" value="submit" className="btn btn-danger"></input>
            </form>
            <div className="info">
            <h2 style={{color: 'white', fontWeight: 'bold', fontSize: '48px'}}>
                Contact info
            <div className="underline" style={{background: 'black'}}></div>
            </h2>
            <ul className="contact-info-list" style={{listStyle: 'none'}}>
                <li>
                    <div className="contact-info-item">
                    <a href="mailto: tarekaykourbusiness@outlook.com" style={{float:'left'}}><FontAwesomeIcon size="2x" style={{color: 'white', textAlign: 'center'}} icon={faEnvelope}/></a>
                    <p style={{color:'white', float: 'right'}}>tarekaykourbusiness@outlook.com</p>
                    <div style={{clear:'both'}}></div>
                    </div>
                </li>
                <li className="contact-info-item">
                    <a href="https://github.com/TarekAykour" style={{float: 'left'}}><FontAwesomeIcon size="2x" style={{color: 'white', textAlign: 'center'}} icon={faGithub}/></a>
                    <p style={{color:'white', float: 'right'}}>TarekAykour</p>
                    <div style={{clear: 'both'}}></div>
                </li>
                <li className="contact-info-item">
                    <a href="https://www.linkedin.com/in/tarekaykour/" style={{float: 'left'}}><FontAwesomeIcon style={{color: 'white', textAlign: 'center'}} size="2x" icon={faLinkedin}/></a>
                    <p style={{color:'white', float: 'right'}}>tarekaykour</p>
                    <div style={{clear: 'both'}}></div>
                </li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Contact;