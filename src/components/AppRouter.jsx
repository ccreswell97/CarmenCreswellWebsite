import {Home} from '../pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Education} from '../pages/Education';
import {Projects} from '../pages/Projects';
import {WorkExp} from '../pages/WorkExp';
import {Hobbies} from '../pages/Hobbies';

export function AppRouter() {
    return (
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
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </BrowserRouter>
    )
}