import axios from "axios";
import React from "react";
import './mangas.css';

const baseURL = 'https://api.jikan.moe/v3/genre/manga/1/1';

export default function Mangas() {
    const [post, setPost] = React.useState(null);
 
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
    }, []);

    if (!post) return null;

    const memberList = post.manga.map((e) => {
        return (
          <div className='manga'>
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
          <p className='mangatext'>
            {e.synopsis}
          </p>
        </div>
        );
    });
    
    return <ul id='manga'>{memberList}</ul>;
  }