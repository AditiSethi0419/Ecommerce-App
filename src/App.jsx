import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import WishList from "./pages/Wishlist";


function App() {

  return (
    <>
      <Router>
      <Header  />

      <Routes>
      
        <Route path="/login" element={<Login  />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
