import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/Pages/Home/HomePage';
import About from './Components/Pages/About/About';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/account" element={<Account />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;