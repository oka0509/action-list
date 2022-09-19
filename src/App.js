import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animes from "./animes";
import Mangas from "./mangas";
import Header from "./header.js"
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';  


const App = () => {
    return (
      <BrowserRouter>
          <h1 id='title'>Yuri-List</h1>
          <Header/>
        <Routes>
          <Route path={`/`} element={<Animes/>} />
          <Route path={`/mangas`} element={<Mangas/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;