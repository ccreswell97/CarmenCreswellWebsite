import './stylesheets/App.scss';

import {AppFooter} from './components/AppFooter';
import {AppNav} from './components/AppNav';
import {AppRouter} from './components/AppRouter';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container className="pt-5">
      <AppNav/>
      <AppRouter/>
      <AppFooter/>
    </Container>
  );
}

export default App;
