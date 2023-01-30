import React, {useState} from "react"
import Modal from "react-modal"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"


Modal.setAppElement('#app')
const customStyles = {
    content: {
      display: 'flex',
      flexDirection: 'row',
      fontFamily: 'montserrat',
      top: '50%',
      left: '50%',
      width: '95%',
      height: '75%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      background: '#333',
      position: 'relative',
      zIndex: 2,
      borderRadius: '5px',
      boxShadow: '1px 1px 3px #333'
    },
  };



function ProjectDiv(props){
    const [counter,setCounter] = useState(0)
    const [modal,setModal] = useState(false)
    const [image, setImage] = useState(props.images[counter])
    // carasoul

    //each image has got an index (the images are already in  the array)
    //loop through the images array and set src to the image index
    //when counter is equal to array length set counter to 0 and restart
    
    // fade out
    

    // fade in
    function unfade(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 50);
    }
    
    setTimeout(function(){
        const image = document.querySelector('.image')
        if (counter === props.images.length - 1){
            setCounter(0)
        }else {
            setCounter(counter + 1)
        }
        setImage(props.images[counter])

    },5000)
    

 

    
    
    
    return (
        <div>
        <div className="project-div" key={props.key} onClick={()=> setModal(true)}>
            {/* images */}
            
            <div className="bar">
                <div className="cicrlces">
                    <div className="red"></div>
                    <div className="orange"></div>
                    <div className="green"></div>
                </div>
                <div className="searchbar">
                    {props.name}
                </div>
            </div>
            <div className="image-div" >
                <img className="front-image" src={`../../static/images/${image}`} style={{width: '100%', height: '100%'}}></img>
                {/* <img className="backend-image" src={`../../static/images/${image}`}></img> */}
            </div>
            <div className="hover-info">
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                    <ul>
                        {props.technologies.map(techonlogy => {
                            return (
                                <li>{techonlogy}</li>
                            )
                        })}
                    </ul>
                    <a className="btn btn-primary" href={props.link}>Go to webapp</a>
                </div>
        </div>
        <Modal key={props.id} id="modal" isOpen={modal} style={customStyles}>
            <FontAwesomeIcon icon={faTimes} size="2x" onClick={()=> setModal(false)} />
            <div className="modal-display">
                <div className="modal-display-image">
                <img src={`../../static/images/${image}`} width="25%"  onClick={()=> {
                    console.log(image)
                    }}></img>
                </div>
                <div className="info">
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                    <ul>
                        {props.technologies.map(techonlogy => {
                            return (
                                <li>{techonlogy}</li>
                            )
                        })}
                    </ul>
                    <a href={props.link}>Go to webapp</a>
                </div>
            </div>
        
        </Modal>
           
        </div>
    )
}


export default ProjectDiv;