import React, { useState, useEffect } from "react";
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
  RegisterModal,
  LoginModal,
  AdminDashboard,
  Addproducts,
  AccesForbiden,
  Checkout,
  PageNotFound,
  ListProducts,
  ListUsers,
  MobileMenuTab,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { testCookie } from "./functions/auth";
import AddToCartModal from "./components/Modal/AddToCartModal";
import { Toaster } from "react-hot-toast";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  const [Open, setOpen] = useState(false);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [adminVar, setadminVar] = useState(null);
  const [mobileMenu, setmobileMenu] = useState(false);

  const dispatch = useDispatch();
  //CHECK AUTH
  useEffect(() => {
    const unsuscribe = testCookie()
      .then((res) => {
        dispatch({
          type: "TOKEN_VERIFIED",
          payload: {
            isAdmin: res.data.isAdmin,
            _id: res.data.id,
            name: res.data.name,
            mobileNumber: res.data.mobileNumber,
          },
        });
        if (res.data.isAdmin) {
          setadminVar(true);
        } else {
          setadminVar(false);
        }
        console.log("Dispatched");
      })
      .catch((err) => {
        setadminVar(false);

        console.log(err.response.data);
      });
    return () => unsuscribe();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={mobileMenu ? { transform: "translate(250px)" } : {}}
        className="pagewrapper"
        id={mobileMenu ? "mobilemenuactive" : ""}
      >
        <div className="mobileoverlay"></div>
        <Router>
          <Announcement />
          <Header />
          <Navbar
            setOpen={setOpen}
            setLoginOpen={setLoginOpen}
            setmobileMenu={setmobileMenu}
            mobileMenu={mobileMenu}
          />
          <RegisterModal
            Open={Open}
            setOpen={setOpen}
            setLoginOpen={setLoginOpen}
          />
          <Toaster />
          <LoginModal LoginOpen={LoginOpen} setLoginOpen={setLoginOpen} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/p/:slug" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shopcollection" element={<ShopCollection />} />
            <Route
              path="/admindashboard/addproducts"
              element={<AdminRoutes adminVar={adminVar} />}
            >
              <Route
                path="/admindashboard/addproducts"
                element={<Addproducts />}
              />
            </Route>
            <Route path="/admindashboard" element={<AdminRoutes />}>
              <Route path="/admindashboard" element={<AdminDashboard />} />
            </Route>
            <Route
              path="/admindashboard/listproducts"
              element={<AdminRoutes />}
            >
              <Route
                path="/admindashboard/listproducts"
                element={<ListProducts />}
              />
            </Route>
            <Route path="/admindashboard/listusers" element={<AdminRoutes />}>
              <Route path="/admindashboard/listusers" element={<ListUsers />} />
            </Route>
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Footer />
      </div>
      <MobileMenuTab setmobileMenu={setmobileMenu} mobileMenu={mobileMenu} />
    </div>
  );
}

export default App;
