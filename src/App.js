import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Addresses from './pages/Addresses'
import AddressDetail from './pages/AddressDetail';
import Books from './pages/Books'

import './App.css';


function App() {
  return (
    <Router>
        <Switch>
            <Route path='/addresses/:id'>
                <AddressDetail/>
            </Route>
            
            <Route path='/addresses'>
                <Addresses/>
            </Route>
            
            <Route path='/books'>
                <Books />
            </Route>
            <Route path='/'>
                <Home/>
            </Route>

        </Switch>

    </Router>
  );
}

export default App;
