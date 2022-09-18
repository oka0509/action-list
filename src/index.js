import React from "react";
import { render } from "react-dom";
import Anime from './anime.js';
import './index.css'
import axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animes: [],
    } ;
  }

  memberList(list) {
    const memberList = list.map((e) => {
      return (
        <Anime
        id={e.mal_id}
        url={e.url}
        image_url={e.image_url}
        title={e.title}
        score={e.score}
        />
      );
    });

    return <ul>{memberList}</ul>;
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Yuri-app</h1>
        </nav>
        <div id='animes'>
          <button onClick={this.getJson}>Get Json</button>
          {this.memberList(this.state.animes)}
        </div>
      </div>
    );
  }

  getJson = () => {
    const url = "https://api.jikan.moe/v3/genre/anime/26/1";

    axios.get(url).then(res => {
      this.setState({animes: res.data.anime});
      console.log(res.data.anime);
    });
  };
}

render(<App />, document.getElementById("root"));