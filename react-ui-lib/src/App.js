import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Ciencia from './pages/SeccionCiencia';
import Ficcion from './pages/SeccionFiccion';
import SeccionHistoria from './pages/SeccionHistoria';
import SeccionInfantil from './pages/SeccionInfantil';
import Registracion from './pages/Registracion';
import Contacto from './pages/Contacto';
import Catalogo from './pages/Catalogo';
import AgregarLibro from './pages/AgregarLibro';
import IniciarSesion from './pages/IniciarSesion';

import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<IniciarSesion />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/ciencia" element={<Ciencia />} />
            <Route path="/ficcion" element={<Ficcion />} />
            <Route path="/historia" element={<SeccionHistoria />} />
            <Route path="/infantil" element={<SeccionInfantil />} />
            <Route path="/registracion" element={<Registracion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/agregar-libro" element={<AgregarLibro />}/>
          </Routes>
        </main>
        <footer className="bg-dark text-light py-4 mt-auto">
          <div className="container text-center">
            <p className="mb-2">&copy; 2025 Librería El Saber</p>
            <p className="mb-2">
              Redes:{" "}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-warning">Instagram</a> |
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-warning">Facebook</a>
            </p>
            <p className="mb-0"><a href="/" className="text-warning">Términos y condiciones</a></p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
