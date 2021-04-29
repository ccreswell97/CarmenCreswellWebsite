import './stylesheets/App.scss';

import {Home} from './pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Education} from './pages/Education';
import {Projects} from './pages/Projects';
import {WorkExp} from './pages/WorkExp';
import {Hobbies} from './pages/Hobbies';
import {Navbar, Nav} from 'react-bootstrap';
import {AppFooter} from './components/AppFooter';

function App() {
  return (
    <div className="App container pt-5">
      <Navbar bg="primary" expand="md">
      <Navbar.Brand href="/home">Carmen Creswell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/work">Work Experience</Nav.Link>
            <Nav.Link href="/hobbies">Hobbies</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <body>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/education">
              <Education/>
            </Route>
            <Route path="/hobbies">
              <Hobbies/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/work">
              <WorkExp/>
            </Route>
          </Switch>
        </BrowserRouter>
      </body>
      <AppFooter/>
    </div>
  );
}

export default App;
