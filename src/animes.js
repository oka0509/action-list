import axios from "axios";
import React from "react";
import './css/animes.css';

const baseURL = 'https://api.jikan.moe/v4/anime';

export default function Animes() {
    const [post, setPost] = React.useState(null);
 
    React.useEffect(() => {
        axios.get(baseURL, {
          params: {
            genres: 26,
            sfw: true,
            start_date: 2015
          }
        }).then((response) => {
          console.log(response.data);
          setPost(response.data);
        });
    }, []);

    if (!post) return null;

    const memberList = post.data.map((e) => {
        return (
          <div className='anime'>
          <a 
            href={e.url} 
            target='_blank'
            rel='nonpener noreferrer'
          >
          <img src={e.images.jpg.image_url} alt='yuriImg'/>
          <li>
          {e.titles[0].title}        
          </li>
          </a>
          <p className='animetext'>
            {e.synopsis}
          </p>
        </div>
        );
    });
    
    return <ul id='animes'>{memberList}</ul>;
  }