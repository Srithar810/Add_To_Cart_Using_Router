const CartModal = ({ cart, removeFromCart, closeModal }) => {
    const calculateTotal = () => {
      const total = cart.reduce((acc, item) => acc + item.price, 0);
      return total - total * 0.1;  // 10% discount
    };
  
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-xl font-bold">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500 mt-4">Your cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center py-2">
                    <p>{item.title} - ${item.price}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-lg">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between">
                <span className="font-bold">Total: ${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={closeModal}
              className="bg-gray-300 text-black px-4 py-2 rounded-lg">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartModal;
  