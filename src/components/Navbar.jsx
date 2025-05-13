import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-500 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-white text-xl font-bold">Product Store</h1>
      <div className="space-x-4">
        <Link
          to="/"
          className="text-white hover:underline"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="text-white hover:underline"
        >
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
