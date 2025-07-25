import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/common/navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from '@/components/common/footer/Footer';
import GetQuotesPage from './pages/GetQuotesPage';
import InstantQuoteFormPage from './pages/InstantQuoteFormPage';
import TermsConditionPage from './pages/TermsConditionPage';
import ThankYoupage from './pages/ThankYoupage';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
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
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <AnimatedPage>
            <LandingPage />
          </AnimatedPage>
        } />
        <Route path="/instant-quote" element={
          <AnimatedPage>
            <GetQuotesPage />
          </AnimatedPage>
        } />
        <Route path="/instant-quote/form" element={
          <AnimatedPage>
            <InstantQuoteFormPage />
          </AnimatedPage>
        } />
        <Route path="/terms-condition" element={
          <AnimatedPage>
            <TermsConditionPage />
          </AnimatedPage>
        } />
        <Route path="/thank-you" element={
          <AnimatedPage>
            <ThankYoupage />
          </AnimatedPage>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;