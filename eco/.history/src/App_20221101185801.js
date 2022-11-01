
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Header from './components/Header';
import ProductComponent from './components/ProductComponent';
import ProductListing from './components/ProductListing';
import store from './redux/store';
function App() {
  return (
  <Provider store={store}>
<div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
<Router>
<Switch>
    <Route exact path="/">
      <ProductListing />
    </Route>
    <Route path="/id">
      <ProductComponent />
    </Route>
  </Switch>
</Router>
</div>
    </Provider>
  );
}

export default App;
