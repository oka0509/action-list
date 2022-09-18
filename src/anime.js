import React from "react";

function Anime(props) {
    return (
      <div>
        <img src={props.image_url} alt='yuriImg'/>
        <li className='anime'>
          <a 
          href={props.url} 
          target='_blank'
          rel='nonpener noreferrer'
          >
          {props.title}          
          </a>
        </li>
      </div>
  
    );
  }

export default Anime;