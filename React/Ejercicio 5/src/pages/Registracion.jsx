import React, { useState } from 'react';
import '../estilos/estilo-registracion.css'
function Registracion() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fecha: '',
    email: '',
    password: '',
    sexo: '',
    tema: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío al backend o mostrar un mensaje
    alert('Formulario enviado:\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <section className="seccion">
      <h2 className="titulo-seccion">Registración</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label> <br></br>
          <input type="text" id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="apellido">Apellido:</label> <br></br>
          <input type="text" id="apellido" name="apellido" required value={formData.apellido} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="fecha">Fecha de Nacimiento:</label><br></br>
          <input type="date" id="fecha" name="fecha" required value={formData.fecha} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="email">Email:</label><br></br>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label><br></br>
          <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange} />
        </div>

        <div className="sexo-group">
          <label>Sexo:</label><br></br>
          <label><input type="radio" id="masculino" name="sexo" value="masculino" required checked={formData.sexo === 'masculino'} onChange={handleChange} /> Masculino</label>
          <label><input type="radio" id="femenino" name="sexo" value="femenino" checked={formData.sexo === 'femenino'} onChange={handleChange} /> Femenino</label>
          <label><input type="radio" id="otro" name="sexo" value="otro" checked={formData.sexo === 'otro'} onChange={handleChange} /> Otro</label>
        </div>

        <div className="full-width">
          <label htmlFor="tema">Tema Favorito:</label><br></br>
          <select id="tema" name="tema" required value={formData.tema} onChange={handleChange}>
            <option value="">--Seleccione un tema--</option>
            <option value="ciencia">Ciencia</option>
            <option value="ficcion">Ficción</option>
            <option value="infantil">Infantil</option>
            <option value="historia">Historia</option>
          </select>
        </div>

        <div className="full-width">
          <input id="botton" type="submit" value="Registrarse" />
        </div>
      </form>
    </section>
  );
}

export default Registracion;
