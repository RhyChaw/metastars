import Land2 from './pages/land2';
import Blogs from './pages/Blogs';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Land2 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/fill-form' element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
