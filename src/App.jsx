import React, { useState, useEffect } from 'react';
// Page imports
import Spirituality from './pages/Spirituality';
import Finance from './pages/Finance';
import MentalHealth from './pages/MentalHealth';
import Contact from './pages/Contact';
import Land2 from './pages/land2';
import Land3 from './pages/land3';
import Blogs from './pages/Blogs';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';
import Loader from './components/Loader';
import LOGO from './assets/logo.jpeg';

// Admin imports
import AdminDashboard from './admin/adminland';

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  if (loading) {
    return <Loader logo={LOGO} duration={2500} onComplete={() => setLoadingComplete(true)}/>; // Show loader first
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Land3 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/fill-form' element={<Form />} />
        <Route path='/spirituality' element={<Spirituality />} />
        <Route path='/financial-literacy' element={<Finance />} />
        <Route path='/mental-health' element={<MentalHealth />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
