import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Bookmark from './pages/Bookmark';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bookmark' element={<Bookmark/>} />
      </Routes>
    </div>
  );
}

export default App;
