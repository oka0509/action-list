import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animes from "./components/animes";
import Mangas from "./components/mangas";
import Header from "./components/header.js"
import 'bootstrap/dist/css/bootstrap.min.css';  
import './css/app.css';


const App = () => {
    return (
      <div>
        <h1 id='title'>action-list</h1>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Animes/>} />
            <Route path={`/mangas`} element={<Mangas/>} />
          </Routes>
        </BrowserRouter>
        <footer>
          <p>oka</p>
          <address>
            <a 
            href="https://github.com/oka0509"
            target='_blank'
            rel='nonpenner noreferrer' 
            >github.com/oka0509</a>
          </address>
        </footer>
      </div>
    );
  };
  
  export default App;