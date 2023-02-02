import logo from './logo.svg';
import './App.css';
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faEdit,faTrash,faList,faHome,faPlus,faSearch,faUser } from '@fortawesome/free-solid-svg-icons';
import {Navbar,Nav,Container} from 'react-bootstrap'
import Home from "./component/Home"
import ResturantCreate from "./component/ResturantCreate"
import ResturantList from "./component/ResturantList"
import ResturantDetail from "./component/ResturantDetail"
import ResturantSearch from "./component/ResturantSearch"
import ResturantUpdate from "./component/ResturantUpdate"
import Login from './component/Login';
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus}/>Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch}/>Search</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="login"><FontAwesomeIcon icon={faUser}/>Login</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
     <Routes>
         <Route path="/list" element={<ResturantList/>} /> 
         <Route path="/create" element={<ResturantCreate/>} />
         <Route path="/search" element={<ResturantSearch/>} />
         <Route path="/details" element={<ResturantDetail/>} />
         <Route path="/update/:id" element={ <ResturantUpdate/>}/>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
     </Routes>
         
    </Router>
       
      
    </div>
  );
}

export default App;
