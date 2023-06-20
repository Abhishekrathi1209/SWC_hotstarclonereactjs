import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Explorepage from './components/landingpage';
import Home from './components/Home';
import MoviePgae from './components/MoviePage';
import Topbar from './components/topbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Switch>
          <Route exact path = "/">
            <Explorepage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/home/movie/:id/:type/:title">
            <MoviePgae />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
