import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Link to='/'>Home</Link> | <Link to='/login'>Login</Link>
          <Routes>
            < Route path='/' element={<Home />} />
            < Route path='/:id' element={<Detail />} />
            < Route path='/login' element={<Login />} />
            {/* < Route path='/login' element={<Login />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
