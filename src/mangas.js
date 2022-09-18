import axios from "axios";
import React from "react";
import './css/mangas.css';

const baseURL = 'https://api.jikan.moe/v4/manga';

export default function Mangas() {
    const [post, setPost] = React.useState(null);
 
    React.useEffect(() => {
        axios.get(baseURL, {
            params: {
                genres: 26,
                sfw: true,
                start_date: 2015
            }
        }).then((res) => {
          setPost(res.data);
        });
    }, []);

    if (!post) return null;

    const memberList = post.data.map((e) => {
        return (
          <div className='manga'>
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
          <p className='mangatext'>
            {e.synopsis}
          </p>
        </div>
        );
    });
    
    return <ul id='mangas'>{memberList}</ul>;
  }