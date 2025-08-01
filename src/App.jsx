import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/common/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "@/components/common/footer/Footer";
import GetQuotesPage from "./pages/GetQuotesPage";
import InstantQuoteFormPage from "./pages/InstantQuoteFormPage";
import TermsConditionPage from "./pages/TermsConditionPage";
import ThankYoupage from "./pages/ThankYoupage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/instant-quote" element={<GetQuotesPage />} />
            <Route
              path="/instant-quote/form"
              element={<InstantQuoteFormPage />}
            />
            <Route path="/terms-condition" element={<TermsConditionPage />} />
            <Route path="/thank-you" element={<ThankYoupage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
