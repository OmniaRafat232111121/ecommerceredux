import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/'

import "./App.css";
import ProductListing from "./components/ProductListing";


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing} />
        
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;