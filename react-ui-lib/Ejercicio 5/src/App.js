import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Header from './components/Header';
import Ciencia from './pages/SeccionCiencia';
import Ficcion from './pages/SeccionFiccion';
import SeccionHistoria from './pages/SeccionHistoria';
import SeccionInfantil from './pages/SeccionInfantil';
import Registracion from './pages/Registracion';
import Contacto from './pages/Contacto';
import Catalogo from './pages/Catalogo';
import AgregarLibro from './pages/AgregarLibro';

import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';

export default function App() {
  const [catalogo, setCatalogo] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos:", data);
        setCatalogo(data.books || []);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al cargar libros:", err);
        setCatalogo([]);
        setCargando(false);
      });
  }, []);
  
  const agregarLibro = async (nuevoLibro) => {
    try {
      const res = await fetch('http://localhost:3000/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoLibro),
      });
  
      if (!res.ok) throw new Error('Error al agregar libro');
  
      const data = await res.json();
  
      setCatalogo(prevCatalogo => [...prevCatalogo, data.book]);
    } catch (error) {
      console.error(error);
      alert('No se pudo agregar el libro, intenta de nuevo.');
    }
  };  

  const buscarLibros = (termino, categoria = null) => {
    let librosFiltrados = catalogo;

    if (categoria) {
      librosFiltrados = librosFiltrados.filter(libro => libro.categoria === categoria);
    }

    if (termino) {
      const terminoLower = termino.toLowerCase();
      librosFiltrados = librosFiltrados.filter(libro =>
        libro.titulo.toLowerCase().includes(terminoLower) ||
        libro.autor.toLowerCase().includes(terminoLower) ||
        libro.descripcion.toLowerCase().includes(terminoLower)
      );
    }

    return librosFiltrados;
  };

  if (cargando) return <p className="text-center mt-5">Cargando catálogo...</p>;

  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio catalogo={catalogo} buscarLibros={buscarLibros} />} />
            <Route path="/ciencia" element={<Ciencia catalogo={catalogo} buscarLibros={buscarLibros} />} />
            <Route path="/ficcion" element={<Ficcion catalogo={catalogo} buscarLibros={buscarLibros} />} />
            <Route path="/historia" element={<SeccionHistoria catalogo={catalogo} buscarLibros={buscarLibros} />} />
            <Route path="/infantil" element={<SeccionInfantil catalogo={catalogo} buscarLibros={buscarLibros} />} />
            <Route path="/registracion" element={<Registracion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/catalogo" element={<Catalogo catalogo={catalogo} buscarLibros={buscarLibros} />} />
            <Route path="/agregar-libro" element={<AgregarLibro agregarLibro={agregarLibro} />} />
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
