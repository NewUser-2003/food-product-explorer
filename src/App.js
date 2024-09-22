import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart"; // <-- Import Cart
import CategoryPage from "./pages/CategoryPage"; // <-- Import CategoryPage

function App() {
  return (
    <Router>
      <div>
        <header className="p-4 bg-gray-800 text-white">
          <h1 className="text-2xl">Food Product Explorer</h1>
          <nav>
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/cart" className="mr-4">
              Cart
            </Link>{" "}
            {/* Cart Link */}
            <Link to="/category/snacks">Snacks</Link>{" "}
            {/* Example category link */}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:barcode" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<CategoryPage />} />{" "}
          {/* New Category Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
