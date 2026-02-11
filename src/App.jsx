import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Info from './Pages/Info';
import Message from './Pages/Message';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/info" element={<Info />} />
        <Route path="/message" element={<Message />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App; 
