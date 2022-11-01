
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
  <Provider store={store}>
<div>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</div>
    </Provider>
  );
}

export default App;
