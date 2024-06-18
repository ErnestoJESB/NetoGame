import React from "react";
import { useState } from "react";

const Formulario = () => {
  interface Formulario {
    name: string;
    edad: number;
    isEstudiante: boolean;
    direccion: string;
    hobbies: [];
  }
  interface Estudiante {
    name: string;
    edad: number;
    isEstudiante: boolean;
    direccion: string;
    hobbies: [];
  }
  const [formulario, setFormulario] = useState<Formulario>({
    name: "",
    edad: 0,
    isEstudiante: false,
    direccion: "",
    hobbies: [],
  });

  const hobbies = ["futbol", "basket", "natacion", "tenis", "golf"];

  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  /* se crea un estado para guardar los estudiantes */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "isEstudiante") {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstudiantes([...estudiantes, formulario]);
    console.log(estudiantes);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          onChange={handleChange}
        />
        <input type="checkbox" name="isEstudiante" onChange={handleChange} />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          onChange={handleChange}
        />
        {hobbies.map((hobbie) => (
          <div key={hobbie}>
            <input type="checkbox" name="hobbies" value={hobbie} />
            <label>{hobbie}</label>
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
