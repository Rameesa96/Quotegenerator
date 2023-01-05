import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Bookmark from './pages/Bookmark';
import { Provider } from 'react-redux'
import {store} from '../src/Redux/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bookmark' element={<Bookmark/>} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
