import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    
    <div class="container">
     
        <div className="Contact">
            
        <img className="avatar" src={props.avatar}/>
        
        <div>
         <h3 className="name">{props.name}</h3>
         <p className="status">{props.online
             ? <div><div className='status-online'></div>Online</div>
             : <div><div className='status-offline'></div>Offline</div>}</p>
        </div>


        
        </div>
        <br/>

  
   </div>
  );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.string.isRequired,
  }; 

export default Contact;