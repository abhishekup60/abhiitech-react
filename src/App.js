import './App.css';
import Header from './Header'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
      </BrowserRouter>
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>I-Tech</Button>
      </header> */}
    </div>
  );
}

export default App;
