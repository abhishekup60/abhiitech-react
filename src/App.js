import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import AddProduct from './AddProduct'
import ProductList from './ProductList'
import EditProduct from './EditProduct'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="product/add" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
        <Route path="/product" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
        <Route path="product/edit/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
