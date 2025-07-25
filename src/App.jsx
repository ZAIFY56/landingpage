import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/common/navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from '@/components/common/footer/Footer'
import GetQuotesPage from './pages/GetQuotesPage';


function App() {

  return (
    <>
      <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage/> } />
                <Route path="/instant-quote" element={<GetQuotesPage /> } />
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>

    </>
  )
}

export default App
