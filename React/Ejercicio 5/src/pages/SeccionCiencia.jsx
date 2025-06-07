import React from 'react';
import '../estilos/estilo-ciencia.css';

const Ciencia = () => {
  return (
    <div>
      <main>
        <section className="ciencia">
          <h2>Sección: Ciencia</h2>
          <div className="grid-libros">
            <Libro
              imagen="libro1-ciencia.jpeg"
              titulo="Breves respuestas a las grandes preguntas"
              autor="Stephen Hawking"
              descripcion="El físico aborda preguntas fundamentales del universo desde el Big Bang hasta la existencia de Dios."
            />
            <Libro
              imagen="libro2-ciencia.jpeg"
              titulo="El gen: una historia íntima"
              autor="Siddhartha Mukherjee"
              descripcion="Una exploración fascinante sobre la historia de la genética y su impacto en la humanidad."
            />
            <Libro
              imagen="libro3-ciencia.webp"
              titulo="Cosmos"
              autor="Carl Sagan"
              descripcion="Un viaje por el universo desde el conocimiento científico, explicado de forma accesible y poética."
            />
            <Libro
              imagen="libro4-ciencia.webp"
              titulo="Una breve historia de casi todo"
              autor="Bill Bryson"
              descripcion="Una mirada entretenida y educativa sobre los grandes descubrimientos científicos de la humanidad."
            />
            <Libro
              imagen="libro5-ciencia.jpg"
              titulo="El cerebro humano explicado a mi nieta"
              autor="Jean-Didier Vincent"
              descripcion="Un neurocientífico explica de forma simple y cercana los misterios del cerebro humano."
            />
            <Libro
              imagen="libro6-ciencia.jpeg"
              titulo="Sapiens: De animales a dioses"
              autor="Yuval Noah Harari"
              descripcion="Una historia de la humanidad desde la evolución hasta la era moderna, con reflexiones provocadoras."
            />
          </div>
        </section>
      </main>

      
    </div>
  );
};

const Libro = ({ imagen, titulo, autor, descripcion }) => (
  <div className="libro">
    <img src={imagen} alt={titulo} />
    <h3>{titulo}</h3>
    <p>{autor}</p>
    <p>{descripcion}</p>
  </div>
);

export default Ciencia;
