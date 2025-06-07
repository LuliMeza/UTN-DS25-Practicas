import React from 'react';


function Inicio(){
  return (
    <main>
      <section className="ficcion">
        <h1><a href="/ficcion">Ficción</a></h1>
        <div className="libro">
          <img src="libro1-ficcion.webp" alt="El Nombre del Viento" />
          <h2>El Nombre del Viento</h2>
          <p>Patrick Rothfuss</p>
        </div>
      </section>

      <section className="ciencia">
        <h1><a href="/ciencia">Ciencia</a></h1>
        <div className="libro">
          <img src="libro1-ciencia.jpeg" alt="Breves respuestas a las grandes preguntas" />
          <h2>Breves respuestas a las grandes preguntas</h2>
          <p>Stephen Hawking</p>
        </div>
      </section>

      <section className="historia">
        <h1><a href="/historia">Historia</a></h1>
        <div className="libro">
          <img src="libro1-historia.webp" alt="Guns, Germs, and Steel" />
          <h2>Guns, Germs, and Steel</h2>
          <p>Jared Diamond</p>
        </div>
      </section>

      <section className="infantil">
        <h1><a href="/infantil">Infantil</a></h1>
        <div className="libro">
          <img src="libro1-infantil.webp" alt="El Principito" />
          <h2>El Principito</h2>
          <p>Antoine de Saint-Exupéry</p>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
