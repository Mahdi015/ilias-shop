import "./App.css";
import {
  Header,
  Navbar,
  Announcement,
  Home,
  Footer,
  ProductPage,
  Cart,
  ShopCollection,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <>
      <Announcement />
      <Header />
      <Navbar />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/shopcollection" element={<ShopCollection />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
