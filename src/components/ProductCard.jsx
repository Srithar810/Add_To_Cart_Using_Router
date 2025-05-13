const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border p-4 rounded-lg bg-white shadow-md">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
        <p className="text-gray-500">{product.description}</p>
        <p className="font-semibold mt-2">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-full">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  