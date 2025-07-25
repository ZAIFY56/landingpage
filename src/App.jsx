import Navbar from '@/components/common/navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from '@/components/common/footer/Footer'
import GetQuotesPage from './pages/GetQuotesPage';


function App() {

  return (
    <>
    <Navbar/>
    {/* <LandingPage/> */}
    <GetQuotesPage/>
    <Footer />
    </>
  )
}

export default App
