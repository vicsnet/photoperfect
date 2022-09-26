
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import TrackOrder from "./components/TrackOrder";
import Details from "./components/Details";
import Who from "./components/Who";
import SomeElse from "./components/SomeElse";
import ImageUpload from "./pages/ImageUpload";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/details" element={<Details />} />
        <Route path="/who" element={<Who />} />
        <Route path="/someelse" element={<SomeElse />} />
        <Route path="/imageupload" element={<ImageUpload />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
