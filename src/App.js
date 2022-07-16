import './App.css';
import Navbar from './sections/Navbar';
import HomePage from './sections/HomePage.js'
import TrackingPage from './sections/TrackingPage.js'
import FarePage from './sections/FarePage.js'
import Footer from './sections/Footer';

function App() {
  return (
    <div >
      <HomePage />
      <Navbar />
      {/* <TrackingPage /> */}
      <FarePage />
      <Footer />
    </div>
  );
}

export default App;
