import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import AIShoppingAssistant from "./AIShoppingAssistant";

const products = [
  {
    id: "airtag-4pack",
    title: "Apple AirTag 4 Pack",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/71gY9E+cTaS._AC_SX679_.jpg",
    rating: 5,
  },
  {
    id: "cosrx-snail",
    title: "COSRX Snail Mucin 96% Power Repairing Essence 3.38 fl.oz, 100ml, Hydrating Serum for Face with Snail Secretion Filtrate for Dull and Damaged Skin",
    price: 13.26,
    image: "https://m.media-amazon.com/images/I/51IF5kpotSL._SX466_.jpg",
    rating: 4,
  },
  {
    id: "thermos-fountain",
    title: "THERMOS FUNTAINER 12 Ounce Stainless Steel Vacuum Insulated Kids Straw Bottle, Blue/Green",
    price: 13.25,
    image: "https://m.media-amazon.com/images/I/61wS5OECK9L._AC_SY879_.jpg",
    rating: 4,
  },
  {
    id: "ring-stickup",
    title: "Certified Refurbished Ring Stick Up Cam Battery HD security camera with custom privacy controls, Simple setup, Works with Alexa",
    price: 54.99,
    image: "https://m.media-amazon.com/images/I/41Hc4IGGzdL._SY450_.jpg",
    rating: 4,
  },
  {
    id: "y2k-crochet",
    title: "Y2K Crochet Crop Top See Through Hollow Out Sweater Pullover Long Sleeve Knit Color Block Casual Streetwear",
    price: 23.99,
    image: "https://m.media-amazon.com/images/I/71YPc4GGxrL._AC_UX569_.jpg",
    rating: 3,
  },
  {
    id: "yeedi-vac",
    title: "yeedi vac x Robot Vacuum - Ultra-Slim Design, Powerful 3000Pa Suction, Carpet Detection, Smart Mapping - Ideal for Carpet, Hard Floor Cleaning, Pets - Alexa Compatible, Wi-Fi Connected",
    price: 169.98,
    image: "https://m.media-amazon.com/images/I/61i-GuR9qKS._AC_SX569_.jpg",
    rating: 4,
  },
];

const promise = loadStripe(
  "pk_test_51Pm1lULGXhjx3e8fGn7qEdaqmeq8SbFnrqbsTVBeOJ2AUTrPVhHMIeCmCzmSrt6TBHfbJj15YUdn8t9ry21GVlFj00VwCo8FOd"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        //the user just logged in/ was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <AIShoppingAssistant products={products} />
        <Routes>
          <Route
            path="/orders"
            element={
              <>
              <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
