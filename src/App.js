import './stylesheets/App.scss';

import {AppFooter} from './components/AppFooter';
import {AppNav} from './components/AppNav';
import {AppRouter} from './components/AppRouter';

function App() {
  return (
    <div className="App container pt-5">
      <AppNav/>
      <body>
        <AppRouter/>
      </body>
      <AppFooter/>
    </div>
  );
}

export default App;
