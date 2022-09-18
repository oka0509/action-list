import axios from "axios";
import React from "react";
import './animes.css';

const baseURL = 'https://api.jikan.moe/v3/genre/anime/26/1';

export default function Animes() {
    const [post, setPost] = React.useState(null);
 
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

    if (!post) return null;

    const memberList = post.anime.map((e) => {
        return (
          <div className='anime'>
          <a 
            href={e.url} 
            target='_blank'
            rel='nonpener noreferrer'
          >
          <img src={e.image_url} alt='yuriImg'/>
          <li>
          {e.title}        
          </li>
          </a>
        </div>
        );
        });
    
        return <ul id='animes'>{memberList}</ul>;
  }