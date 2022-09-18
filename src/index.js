import React from "react";
import { render } from "react-dom";
import Animes from './animes.js';
import './index.css'


class App extends React.Component {
  
  render() {
    return (
      <div>
        <nav>
          <h1>Yuri-app</h1>
        </nav>
        <Animes/>
      </div>
    );
  }

}

render(<App />, document.getElementById("root"));