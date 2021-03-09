import { Provider } from 'react-redux';
import { store } from './redux/store';
import Display from './components/Display';

import './App.css';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Display />
</div>
</Provider>
);
}


export default App;
