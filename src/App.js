
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/FAQ" element={<Faq />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
