import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NaviBar  from './Components/NaviBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Users} from './Pages/Users';
import {About} from './Pages/About';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/users" component={Users}/>
          <Route path="/about" component={About}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
