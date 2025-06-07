import React from 'react';
import "../estilos/estilo-infantil.css";

export default function Infantil() {
  return (
    <div>
  

      <main>
        <section className="infantil">
          <h2>Sección: Infantil</h2>
          <div className="grid-libros">
            <div className="libro">
              <img src="/libro1-infantil.webp" alt="El Principito" />
              <h3>El Principito</h3>
              <p>Antoine de Saint-Exupéry</p>
              <p>Un clásico de la literatura infantil que combina poesía, filosofía y ternura en una historia atemporal.</p>
            </div>

            <div className="libro">
              <img src="/libro2-infantil.jpeg" alt="Matilda" />
              <h3>Matilda</h3>
              <p>Roald Dahl</p>
              <p>La historia de una niña brillante con poderes especiales que desafía a los adultos injustos con inteligencia y valentía.</p>
            </div>

            <div className="libro">
              <img src="/libro3-infantil.webp" alt="Cuentos de buenas noches para niñas rebeldes" />
              <h3>Cuentos de buenas noches para niñas rebeldes</h3>
              <p>Elena Favilli & Francesca Cavallo</p>
              <p>100 historias de mujeres extraordinarias que inspiran a soñar en grande y romper moldes.</p>
            </div>

            <div className="libro">
              <img src="/libro4-infantil.webp" alt="Alicia en el país de las maravillas" />
              <h3>Alicia en el país de las maravillas</h3>
              <p>Lewis Carroll</p>
              <p>Un viaje mágico y absurdo donde la lógica se pone patas arriba y todo puede pasar.</p>
            </div>

            <div className="libro">
              <img src="/libro5-infantil.jpeg" alt="Harry Potter y la piedra filosofal" />
              <h3>Harry Potter y la piedra filosofal</h3>
              <p>J.K. Rowling</p>
              <p>El inicio de la saga del joven mago que revolucionó la literatura infantil y juvenil.</p>
            </div>

            <div className="libro">
              <img src="/libro6-infantil.jpg" alt="Donde viven los monstruos" />
              <h3>Donde viven los monstruos</h3>
              <p>Maurice Sendak</p>
              <p>Una oda a la imaginación infantil a través de las aventuras de Max en una tierra salvaje y fantástica.</p>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
