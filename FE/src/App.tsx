import Template from './template/Template';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductList from './products/ProductList';
import Landing from './landing/Landing';
import ProductDetail from './products/detail/ProductDetail';
import ShoppingCart from './shopping_cart/ShoppingCart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:slug' element={<ProductDetail />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
