import React from 'react';

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total - total * 0.1; // 10% discount
  };

  return (
    <div className="p-6 pt-20">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-3 border-b">
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <p className="text-sm text-gray-500">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                  >−</button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                  >+</button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-3 bg-red-500 text-white px-2 py-1 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right font-bold text-lg">
            Total (10% off): ${calculateTotal().toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
