import React, { useRef, useState } from "react";

function UseRef() {
  const [contador, setContador] = useState(0);
  const contadorRef = useRef<number>(contador);

  const incrementar = () => {
    setContador((prevContador) => {
      const nuevoContador = prevContador + 1;
      contadorRef.current = nuevoContador;
      return nuevoContador;
    });
  };

  const mostrarContador = () => {
    alert(`Contador actual: ${contadorRef.current}`);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={mostrarContador}>Mostrar Contador Actual</button>
    </div>
  );
}

export default UseRef;
