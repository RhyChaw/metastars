import React from 'react';

// Page imports
import Spirituality from './pages/Spirituality';
import Finance from './pages/Finance';
import MentalHealth from './pages/MentalHealth';
import Contact from './pages/Contact';
import Land2 from './pages/land2';
import Land3 from './pages/land3';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import SubmitBlog from './pages/SubmitBlog';
import ReviewBlog from './admin/ReviewBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TNC from './pages/TNC';
import AboutMS from './pages/AboutMS';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';

// Admin imports
import AdminDashboard from './admin/AdminDashboard';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Land3 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/submit-blog" element={<SubmitBlog />} />
        <Route path='/fill-form' element={<Form />} />
        <Route path='/spirituality' element={<Spirituality />} />
        <Route path='/financial-literacy' element={<Finance />} />
        <Route path='/mental-health' element={<MentalHealth />} />
        <Route path='/admin/*' element={<AdminDashboard />} />
        <Route path="/admin/review/:id" element={<ReviewBlog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tnc' element={<TNC />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/aboutMS' element={<AboutMS />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
