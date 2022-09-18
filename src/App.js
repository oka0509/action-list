import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animes from "./animes";
import Mangas from "./mangas";
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container} from 'react-bootstrap';  


const App = () => {
    return (
      <BrowserRouter>
          <h1 id='title'>Yuri-List</h1>
          <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Animes</Nav.Link>
                    <Nav.Link href="/mangas">Mangas</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        <Routes>
          <Route path={`/`} element={<Animes/>} />
          <Route path={`/mangas`} element={<Mangas/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;