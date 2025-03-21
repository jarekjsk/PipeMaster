import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { MainPage } from './pages/MainPage/MainPage';
import { Serwis } from './pages/Serwis/Serwis';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './components/Footer/Footer';


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
           
            <Route path="/" element={<MainPage/>} />
            <Route path="/service" element={<Serwis/>} />
            <Route path="/contact" element={<Contact/>} />


      </Routes>
      <Footer /> 
    </Router>
  )
}

export default App
