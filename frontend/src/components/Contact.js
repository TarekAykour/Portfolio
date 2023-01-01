import React, {useState} from "react";
import CSRFToken from "./csrftoken"
import {useHistory} from "react-router-dom"

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
            <h2 style={{color: 'white', fontWeight: 'bold', fontSize: '48px'}}>
            Contact
            <div className="underline"></div>
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
                <input type="submit" value="submit" className="btn btn-primary"></input>
            </form>
            <div className="info">
            <h2 style={{color: 'white', fontWeight: 'bold', fontSize: '48px'}}>
                Some info
            <div className="underline" style={{background: 'black'}}></div>
            <p style={{fontSize: '19px', fontWeight: '200', textAlign: 'left'}}>{'<p>Coming soon</p>'}</p>
            </h2>
            </div>
            </div>
        </div>
    )
}

export default Contact;