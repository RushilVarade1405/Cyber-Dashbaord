import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Linux from "./pages/Linux";
import Tools from "./pages/Tools";
import CyberLaws from "./pages/CyberLaws";
import Blockchain from "./pages/Blockchain";
import Cryptography from "./pages/Cryptography";
import Platforms from "./pages/Platforms";
import About from "./pages/About";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/linux"
            element={
              <PageTransition>
                <Linux />
              </PageTransition>
            }
          />
          <Route
            path="/tools"
            element={
              <PageTransition>
                <Tools />
              </PageTransition>
            }
          />
          <Route
            path="/cyber-laws"
            element={
              <PageTransition>
                <CyberLaws />
              </PageTransition>
            }
          />
          <Route
            path="/blockchain"
            element={
              <PageTransition>
                <Blockchain />
              </PageTransition>
            }
          />
          <Route
            path="/cryptography"
            element={
              <PageTransition>
                <Cryptography />
              </PageTransition>
            }
          />
          <Route
            path="/platforms"
            element={
              <PageTransition>
                <Platforms />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
