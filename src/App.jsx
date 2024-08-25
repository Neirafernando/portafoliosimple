// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar Routes correctamente
//importar vistas para el routing
import Header from './Components/Common/Header';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Proyects from './Components/pages/Proyects';
import GlobalBackground from './Components/Common/GlobalBackground ';
import Footer from './Components/Common/Footer';
const App = () => {
  return (
    <div>

      <Router>
        <Header />
        <Routes> {/* Usar Routes en lugar de Route y tener cuidado con las mayusculas  */}
          <Route path="/" element={<Home />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </Router>


    </div>
  );
};

export default App;
