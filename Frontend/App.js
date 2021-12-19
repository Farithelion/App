import './App.css';
import React from 'react';
import {Col,Container,Navbar} from "react-bootstrap";
//import Weatherwidget from './components/Weatherwidget';

// import Guitarexperience from './components/Guitarexperience';
// import Reddit from './components/Reddit';
import Strapi from './components/Strapi'

function App() {

// const [showApp,setShowApp] = useState(false);
// const [showReddit,setShowReddit] = useState(false);

  return ( 
    <>
    
    <Navbar>
        <Navbar.Brand href="#home">Salut Cyprien !</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            
            {/* <Weatherwidget /> */}
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
    <div className='App-header'>
    <Container>
      <Col>
        <Strapi />
      </Col>
    </Container> 
  
    </div>
    </>
  );
}

export default App;