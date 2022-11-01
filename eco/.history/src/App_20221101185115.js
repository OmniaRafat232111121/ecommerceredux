
import { Provider } from 'react-redux';
import {Br Router } from 'react-router-dom';
import Header from './components/Header';
import store from './redux/store';
function App() {
  return (
  <Provider store={store}>
<div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
<Router>
<Header/>
<Switch>

</Switch>
</Router>
</div>
    </Provider>
  );
}

export default App;
