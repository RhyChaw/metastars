import React from 'react';

// Page imports
import Spirituality from './pages/Spirituality';
import Finance from './pages/Finance';
import MentalHealth from './pages/MentalHealth';
import Contact from './pages/Contact';
import Land3 from './pages/land3';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import SubmitBlog from './pages/SubmitBlog';
import ReviewBlog from './admin/ReviewBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TNC from './pages/TNC';
import AboutMS from './pages/AboutMS';
import Login from './pages/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';
import AdminRoute from './components/AdminRoute';


// Admin imports
import AdminDashboard from './admin/AdminDashboard';
import TempBlog from './blogs/FinancialFree';
import Team from './pages/Team';
import MemberDirectory from './admin/MemberDirectory';
import MemberDetails from './admin/MemberDetails';

// blog imports
import Burnout from "./blogs/burnout";
import LettingGo from "./blogs/LettingGo";
import FinancialFree from "./blogs/FinancialFree";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
    <Route path="/" element={<Land3 />} />
    <Route path="/temp" element={<TempBlog />} />
    <Route path="/login" element={<Login />} />
    <Route path="/team" element={<Team />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blog/:id" element={<BlogDetails />} />
    <Route path="/submit-blog" element={<SubmitBlog />} />
    <Route path='/fill-form' element={<Form />} />
    <Route path='/spirituality' element={<Spirituality />} />
    <Route path='/financial-literacy' element={<Finance />} />
    <Route path='/mental-health' element={<MentalHealth />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/tnc' element={<TNC />} />
    <Route path='/privacy' element={<PrivacyPolicy />} />
    <Route path='/aboutMS' element={<AboutMS />} />

    <Route path="/burnout" element={<Burnout />} />
    <Route path="/lettingGo" element={<LettingGo />} />
    <Route path="/financialFree" element={<FinancialFree />} />

    {/* Protected Admin Routes */}
    <Route path='/admin/*' element={<AdminRoute />}>
        <Route index element={<AdminDashboard />} />
        <Route path="review/:id" element={<ReviewBlog />} />
    </Route>

    <Route path='/admin/member/:id' element={<MemberDetails />} />
</Routes>
      <Footer />
    </Router>
  );
}

export default App;
