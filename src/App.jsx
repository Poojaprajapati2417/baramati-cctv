import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoticeProvider } from "./components/ActionNotice";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OurWork from "./pages/OurWork";
import Products from "./pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <NoticeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="our-work" element={<OurWork />} />
            <Route path="customers" element={<Customers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </NoticeProvider>
    </BrowserRouter>
  );
}
