import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Linux from "./pages/Linux";
import Tools from "./pages/Tools";
import CyberLaws from "./pages/CyberLaws";
import Blockchain from "./pages/Blockchain";
import Cryptography from "./pages/Cryptography";
import Platforms from "./pages/Platforms";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/linux" element={<Linux />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/cyber-laws" element={<CyberLaws />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/cryptography" element={<Cryptography />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
