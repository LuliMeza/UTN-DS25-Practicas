import React from "react";
import "../estilos/estilo-historia.css"; // Asegurate de que esté bien el path

const Historia = () => {
  return (
    <div>


      <main>
        <section className="historia">
          <h2>Sección: Historia</h2>
          <div className="grid-libros">
            <div className="libro">
              <img src="libro1-historia.webp" alt="Guns, Germs, and Steel" />
              <h3>Guns, Germs, and Steel</h3>
              <p>Jared Diamond</p>
              <p>Una explicación del desarrollo desigual de las civilizaciones basada en la geografía, la biología y la tecnología.</p>
            </div>

            <div className="libro">
              <img src="libro2-historia.png" alt="La Segunda Guerra Mundial" />
              <h3>La Segunda Guerra Mundial</h3>
              <p>Antony Beevor</p>
              <p>Un relato detallado, claro y documentado del conflicto más grande del siglo XX.</p>
            </div>

            <div className="libro">
              <img src="libro3-historia.jpg" alt="El hombre en busca de sentido" />
              <h3>El hombre en busca de sentido</h3>
              <p>Viktor E. Frankl</p>
              <p>Memorias de un sobreviviente de campos de concentración y su visión del sentido como motor de vida.</p>
            </div>

            <div className="libro">
              <img src="libro4-historia.jpg" alt="Las venas abiertas de América Latina" />
              <h3>Las venas abiertas de América Latina</h3>
              <p>Eduardo Galeano</p>
              <p>Una crítica histórica al saqueo de recursos y las injusticias sociales en América Latina desde la colonia hasta hoy.</p>
            </div>

            <div className="libro">
              <img src="libro5-historia.webp" alt="La Historia del Mundo contada para escépticos" />
              <h3>La Historia del Mundo contada para escépticos</h3>
              <p>Juan Eslava Galán</p>
              <p>Una historia del mundo contada con humor, ironía y datos curiosos para lectores no académicos.</p>
            </div>

            <div className="libro">
              <img src="libro6-historia.webp" alt="De la Tierra a la Luna" />
              <h3>De la Tierra a la Luna</h3>
              <p>Jules Verne</p>
              <p>Una obra de ficción histórica que anticipa la carrera espacial desde la perspectiva del siglo XIX.</p>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Historia;
