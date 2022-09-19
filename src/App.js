import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animes from "./animes";
import Mangas from "./mangas";
import Header from "./header.js"
import 'bootstrap/dist/css/bootstrap.min.css';  


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
      </div>
    );
  };
  
  export default App;