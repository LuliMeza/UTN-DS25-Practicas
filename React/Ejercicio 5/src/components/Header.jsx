import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="cabecera">
        <img src="logo.png" alt="Logo Librería" />
        <h1>Librería El Saber</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/ficcion">Ficción</NavLink></li>
          <li><NavLink to="/ciencia">Ciencia</NavLink></li>
          <li><NavLink to="/historia">Historia</NavLink></li>
          <li><NavLink to="/infantil">Infantil</NavLink></li>
          <li><NavLink to="/registracion">Registrarse</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
