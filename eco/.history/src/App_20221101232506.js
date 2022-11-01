import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
      
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
        
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
      <P
    </div>
  );
}

export default App;