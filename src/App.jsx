import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CartModal from './components/CartModal'; 

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert('Item already added to the cart');
      return;
    }
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar openModal={() => setIsModalOpen(true)} cartCount={cart.length} />

        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>

        {isModalOpen && (
          <CartModal
            cart={cart}
            removeFromCart={removeFromCart}
            closeModal={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
