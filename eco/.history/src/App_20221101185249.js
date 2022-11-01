
import { Provider } from 'react-redux';
import {BrowserRouter as Router,switch,Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import store from './redux/store';
function App() {
  return (
  <Provider store={store}>
<div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
<Router>
<Header/>
<Switch>
   <Route path="/" exact component={ProductListing} />
  
</Switch>
</Router>
</div>
    </Provider>
  );
}

export default App;
