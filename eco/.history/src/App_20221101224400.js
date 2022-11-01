
import { Provider } from 'react-redux';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import ProductComponent from './components/ProductComponent';
import ProductListing from './components/ProductListing';
import store from './redux/store';
function App() {
  return (
  <Provider store={store}>
<div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
<Header/>
<ProductListing/>
</div>
    </Provider>
  );
}

export default App;
