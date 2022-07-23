import './App.css';
import Navbar from './sections/Navbar';
import HomePage from './sections/HomePage.js'
// eslint-disable-next-line
import TrackingPage from './sections/TrackingPage.js'
import FarePage from './sections/FarePage.js'
import Footer from './sections/Footer';
import Anouncements from './sections/Anouncements';

function App() {
  return (
    <div >
      <HomePage />
      <Navbar />
      {/* <TrackingPage /> */}
      <FarePage />
      <Anouncements />
      <Footer />
    </div>
  );
}

export default App;
