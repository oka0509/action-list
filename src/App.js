import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animes from "./animes";
import Mangas from "./mangas";
import Header from "./header.js"
import 'bootstrap/dist/css/bootstrap.min.css';  
import './app.css';


const App = () => {
    return (
      <div>
        <h1 id='title'>yuri-list</h1>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Animes/>} />
            <Route path={`/mangas`} element={<Mangas/>} />
          </Routes>
        </BrowserRouter>
        <footer>
          <p>oka</p>
          <address><a href="https://github.com/oka0509" >github.com/oka0509</a></address>
        </footer>
      </div>
    );
  };
  
  export default App;