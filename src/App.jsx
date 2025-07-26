import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Navbar from "@/components/common/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "@/components/common/footer/Footer";
import GetQuotesPage from "./pages/GetQuotesPage";
import InstantQuoteFormPage from "./pages/InstantQuoteFormPage";
import TermsConditionPage from "./pages/TermsConditionPage";
import ThankYoupage from "./pages/ThankYoupage";
import { useEffect } from "react";

// Smooth scroll component
const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-primary origin-[0%] z-50"
        style={{ scaleX: scrollYProgress }}
      />
      {children}
    </>
  );
};

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <LandingPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/instant-quote"
          element={
            <AnimatedPage>
              <GetQuotesPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/instant-quote/form"
          element={
            <AnimatedPage>
              <InstantQuoteFormPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/terms-condition"
          element={
            <AnimatedPage>
              <TermsConditionPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/thank-you"
          element={
            <AnimatedPage>
              <ThankYoupage />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
