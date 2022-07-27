import React from 'react'
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path='/' exact component={ProductListing} />
      <Route path='/product/:productId' exact component={ProductDetails} />
      <Route>404 file no found</Route>
      </Switch>
      
      </Router>
      
      
    </div>
  );
}

export default App;
