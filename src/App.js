import ProductScreen from "./containers/products/ProductScreen";
//ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./containers/navbar/Navbar";
import CartScreen from "./containers/cart/CartScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/products' element={<ProductScreen />} />
          <Route exact path='/cart' element={<CartScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
