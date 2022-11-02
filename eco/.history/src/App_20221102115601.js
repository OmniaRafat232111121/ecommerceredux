import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'

import "./App.css";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <ProductDetails
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;