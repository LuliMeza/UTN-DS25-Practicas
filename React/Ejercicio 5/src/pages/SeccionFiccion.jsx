import React from 'react';
import '../estilos/estilo-ficcion.css';

const Ficcion = () => {
  return (
    <>
      <main>
        <section className="ficcion">
          <h2>Sección: Ficción</h2>
          <div className="grid-libros">
            <div className="libro">
              <img src="/libro1-ficcion.webp" alt="El Nombre del Viento" />
              <h3>El Nombre del Viento</h3>
              <p>Patrick Rothfuss</p>
              <p>La historia de Kvothe, un joven músico prodigioso que se convierte en el mago más poderoso del mundo.</p>
            </div>

            <div className="libro">
              <img src="/libro2-ficcion.webp" alt="1984" />
              <h3>1984</h3>
              <p>George Orwell</p>
              <p>Una distopía que retrata un futuro totalitario donde el gobierno controla todos los aspectos de la vida.</p>
            </div>

            <div className="libro">
              <img src="/libro3-ficcion.webp" alt="Cien años de soledad" />
              <h3>Cien años de soledad</h3>
              <p>Gabriel García Márquez</p>
              <p>La saga de la familia Buendía en el mítico pueblo de Macondo, cargada de realismo mágico.</p>
            </div>

            <div className="libro">
              <img src="/libro4-ficcion.webp" alt="Los juegos del hambre" />
              <h3>Los juegos del hambre</h3>
              <p>Suzanne Collins</p>
              <p>Katniss Everdeen lucha por sobrevivir en un mortal torneo televisado por un gobierno opresivo.</p>
            </div>

            <div className="libro">
              <img src="/libro5-ficcion.webp" alt="Crónica de una muerte anunciada" />
              <h3>Crónica de una muerte anunciada</h3>
              <p>Gabriel García Márquez</p>
              <p>Una tragedia anunciada desde la primera línea, contada con maestría por uno de los grandes del siglo XX.</p>
            </div>

            <div className="libro">
              <img src="/libro6-ficcion.jpeg" alt="La sombra del viento" />
              <h3>La sombra del viento</h3>
              <p>Carlos Ruiz Zafón</p>
              <p>Un joven descubre un libro olvidado y se embarca en una investigación sobre su misterioso autor.</p>
            </div>
          </div>
        </section>
      </main>

      

    </>
  );
};

export default Ficcion;