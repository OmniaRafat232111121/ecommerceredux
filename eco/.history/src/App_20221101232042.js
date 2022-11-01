
import { Provider } from 'react-redux';
import React from "react";
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import store from './redux/store';
import { Router, Switch } from 'react-router-dom';
function App() {
  return (
  <Provider store={store}>
<div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
<Router>
<Header/>
<Switch
</Router>
</div>
    </Provider>
  );
}

export default App;
