import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animes from "./animes";
import Mangas from "./mangas";
import './app.css'

const App = () => {
    return (
      <BrowserRouter>
            <nav>
                <h1>Yuri-app</h1>
                <div>
                    <a href='/'>Animes</a>
                    <a href='/mangas'>Mangas</a>
                </div>
            </nav>
        <Routes>
          <Route path={`/`} element={<Animes/>} />
          <Route path={`/mangas`} element={<Mangas/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;