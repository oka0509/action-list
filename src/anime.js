import React from "react";

function Anime(props) {
    return (
      <div className='anime'>
        <a 
          href={props.url} 
          target='_blank'
          rel='nonpener noreferrer'
        >
        <img src={props.image_url} alt='yuriImg'/>
        <li>
        {props.title}        
        </li>
        </a>
      </div>
  
    );
  }

export default Anime;