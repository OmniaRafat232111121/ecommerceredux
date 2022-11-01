
import { Provider } from 'react-redux';
import {BrowserRouter as Router,s,Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import store from './redux/store';
function App() {
  return (
  <Provider store={store}>
<div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
<Router>
<Header/>

   <Route path="/" exact component={ProductListing} />
  

</Router>
</div>
    </Provider>
  );
}

export default App;
