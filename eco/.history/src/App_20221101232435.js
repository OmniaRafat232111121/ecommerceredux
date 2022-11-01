import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
      <He
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
        
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;