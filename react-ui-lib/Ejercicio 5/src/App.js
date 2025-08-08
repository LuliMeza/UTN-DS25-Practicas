import React, { useState } from 'react';
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
  // Estado del catálogo de libros
  const [catalogo, setCatalogo] = useState([
    // Ciencia
    {
      id: 1,
      titulo: "Breves respuestas a las grandes preguntas",
      autor: "Stephen Hawking",
      categoria: "ciencia",
      descripcion: "El físico aborda preguntas fundamentales del universo desde el Big Bang hasta la existencia de Dios.",
      imagen: "libro1-ciencia.jpeg"
    },
    {
      id: 2,
      titulo: "El gen: una historia íntima",
      autor: "Siddhartha Mukherjee",
      categoria: "ciencia",
      descripcion: "Una exploración fascinante sobre la historia de la genética y su impacto en la humanidad.",
      imagen: "libro2-ciencia.jpeg"
    },
    {
      id: 3,
      titulo: "Cosmos",
      autor: "Carl Sagan",
      categoria: "ciencia",
      descripcion: "Un viaje por el universo desde el conocimiento científico, explicado de forma accesible y poética.",
      imagen: "libro3-ciencia.webp"
    },
    {
      id: 4,
      titulo: "Una breve historia de casi todo",
      autor: "Bill Bryson",
      categoria: "ciencia",
      descripcion: "Una mirada entretenida y educativa sobre los grandes descubrimientos científicos de la humanidad.",
      imagen: "libro4-ciencia.webp"
    },
    {
      id: 5,
      titulo: "El cerebro humano explicado a mi nieta",
      autor: "Jean-Didier Vincent",
      categoria: "ciencia",
      descripcion: "Un neurocientífico explica de forma simple y cercana los misterios del cerebro humano.",
      imagen: "libro5-ciencia.jpg"
    },
    {
      id: 6,
      titulo: "Sapiens: De animales a dioses",
      autor: "Yuval Noah Harari",
      categoria: "ciencia",
      descripcion: "Una historia de la humanidad desde la evolución hasta la era moderna, con reflexiones provocadoras.",
      imagen: "libro6-ciencia.jpeg"
    },
    // Ficción
    {
      id: 7,
      titulo: "El Nombre del Viento",
      autor: "Patrick Rothfuss",
      categoria: "ficcion",
      descripcion: "La historia de Kvothe, un músico y mago legendario, contada en primera persona.",
      imagen: "libro1-ficcion.webp"
    },
    {
      id: 8,
      titulo: "1984",
      autor: "George Orwell",
      categoria: "ficcion",
      descripcion: "Una distopía que explora temas de vigilancia, control social y manipulación de la verdad.",
      imagen: "libro2-ficcion.webp"
    },
    {
      id: 9,
      titulo: "El Señor de los Anillos",
      autor: "J.R.R. Tolkien",
      categoria: "ficcion",
      descripcion: "La épica aventura de Frodo y la Comunidad del Anillo para destruir el Anillo Único.",
      imagen: "libro3-ficcion.webp"
    },
    {
      id: 10,
      titulo: "Dune",
      autor: "Frank Herbert",
      categoria: "ficcion",
      descripcion: "Una saga de ciencia ficción ambientada en el desértico planeta Arrakis.",
      imagen: "libro4-ficcion.webp"
    },
    {
      id: 11,
      titulo: "Los Juegos del Hambre",
      autor: "Suzanne Collins",
      categoria: "ficcion",
      descripcion: "Katniss Everdeen lucha por sobrevivir en un juego televisado mortal.",
      imagen: "libro5-ficcion.webp"
    },
    {
      id: 12,
      titulo: "Harry Potter y la Piedra Filosofal",
      autor: "J.K. Rowling",
      categoria: "ficcion",
      descripcion: "El joven mago Harry Potter descubre su verdadera identidad y comienza su aventura en Hogwarts.",
      imagen: "libro6-ficcion.jpeg"
    },
    // Historia
    {
      id: 13,
      titulo: "Sapiens: De animales a dioses",
      autor: "Yuval Noah Harari",
      categoria: "historia",
      descripcion: "Una historia de la humanidad desde la evolución hasta la era moderna.",
      imagen: "libro1-historia.webp"
    },
    {
      id: 14,
      titulo: "Guns, Germs, and Steel",
      autor: "Jared Diamond",
      categoria: "historia",
      descripcion: "Un análisis de por qué las civilizaciones humanas se desarrollaron de manera diferente.",
      imagen: "libro2-historia.png"
    },
    {
      id: 15,
      titulo: "La Segunda Guerra Mundial",
      autor: "Antony Beevor",
      categoria: "historia",
      descripcion: "Una historia completa y detallada del conflicto más devastador de la humanidad.",
      imagen: "libro3-historia.jpg"
    },
    {
      id: 16,
      titulo: "Los orígenes del totalitarismo",
      autor: "Hannah Arendt",
      categoria: "historia",
      descripcion: "Un análisis profundo de los sistemas totalitarios del siglo XX.",
      imagen: "libro4-historia.jpg"
    },
    {
      id: 17,
      titulo: "Historia de Roma",
      autor: "Indro Montanelli",
      categoria: "historia",
      descripcion: "Una narración accesible de la historia del Imperio Romano.",
      imagen: "libro5-historia.webp"
    },
    {
      id: 18,
      titulo: "La Guerra Fría",
      autor: "John Lewis Gaddis",
      categoria: "historia",
      descripcion: "Un relato del conflicto ideológico entre Estados Unidos y la Unión Soviética.",
      imagen: "libro6-historia.webp"
    },
    // Infantil
    {
      id: 19,
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      categoria: "infantil",
      descripcion: "Un cuento poético sobre la amistad, el amor y la pérdida.",
      imagen: "libro1-infantil.webp"
    },
    {
      id: 20,
      titulo: "Donde viven los monstruos",
      autor: "Maurice Sendak",
      categoria: "infantil",
      descripcion: "La aventura de Max en la tierra de los monstruos salvajes.",
      imagen: "libro2-infantil.jpeg"
    },
    {
      id: 21,
      titulo: "El Grúfalo",
      autor: "Julia Donaldson",
      categoria: "infantil",
      descripcion: "Un ratón inteligente que engaña a un monstruo temible.",
      imagen: "libro3-infantil.webp"
    },
    {
      id: 22,
      titulo: "La oruga muy hambrienta",
      autor: "Eric Carle",
      categoria: "infantil",
      descripcion: "La historia de una oruga que come y come hasta transformarse.",
      imagen: "libro4-infantil.webp"
    },
    {
      id: 23,
      titulo: "El monstruo de colores",
      autor: "Anna Llenas",
      categoria: "infantil",
      descripcion: "Un libro sobre las emociones para los más pequeños.",
      imagen: "libro5-infantil.jpeg"
    },
    {
      id: 24,
      titulo: "Elmer",
      autor: "David McKee",
      categoria: "infantil",
      descripcion: "La historia de un elefante de colores que aprende a aceptarse.",
      imagen: "libro6-infantil.jpg"
    }
  ]);

  
  const agregarLibro = (nuevoLibro) => {
    const libroConId = {
      ...nuevoLibro,
      id: Date.now() 
    };
    setCatalogo([...catalogo, libroConId]);
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

