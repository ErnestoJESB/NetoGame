import React, { useState, useMemo } from "react";

interface Item {
  id: number;
  nombre: string;
}

const ListaFiltrada: React.FC = () => {
  const [items] = useState<Item[]>([
    { id: 1, nombre: "Manzana" },
    { id: 2, nombre: "Banana" },
    { id: 3, nombre: "Naranja" },
    { id: 4, nombre: "Uva" },
    { id: 5, nombre: "Mango" },
  ]);
  const [filtro, setFiltro] = useState<string>("");

  const elementosFiltrados = useMemo(() => {
    console.log("Filtrando elementos...");
    return items.filter((item) =>
      item.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [items, filtro]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {elementosFiltrados.map((item) => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaFiltrada;
