import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Header from './components/Header';
import Ciencia from './pages/SeccionCiencia';
import Ficcion from './pages/SeccionFiccion';
import SeccionHistoria from './pages/SeccionHistoria';
import SeccionInfantil from './pages/SeccionInfantil';
import Registracion from './pages/Registracion';
import Contacto from './pages/Contacto';

import './estilos.css';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ciencia" element={<Ciencia />} />
          <Route path="/ficcion" element={<Ficcion />} />
          <Route path="/historia" element={<SeccionHistoria />} />
          <Route path="/infantil" element={<SeccionInfantil />} />
          <Route path="/registracion" element={<Registracion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2025 Librería El Saber</p>
        <p>
          Redes:{" "}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </p>
        <p><a href="/">Términos y condiciones</a></p>
      </footer>
     
    </BrowserRouter>
  );
}

