import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body.jsx";
import ViewProducts from "./components/ViewProducts.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store.js";
import Header from "./components/Header.jsx";
import { Toaster } from "react-hot-toast";
import CartList from "./components/CartList.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <div className="relative w-full min-h-screen">

        {/* Background split applied globally */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#dd3e1ac5]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7ecbd5]"></div>

        {/* for to show the messages */}
        <Toaster position="top-right" reverseOrder={false} />

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/view-product/:id" element={<ViewProducts />} />
            <Route path="/cart" element={<CartList />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
