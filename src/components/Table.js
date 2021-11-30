import React from "react";
import TableRow from "./TableRow";

const data = [
  {
    titulo: "Billie Elliot",
    duracion: 123,
    rating: 6,
    genero: "Comedia",
    premios: 0,
  },
  {
    titulo: "Alicia en el pais de las maravillas",
    duracion: 142,
    rating: 4.8,
    genero: "Fantasía",
    premios: 3,
  },
  {
    titulo: "La Bella y la Bestia",
    duracion: 120,
    rating: 5,
    genero: "Romace",
    premios: 5,
  },
  {
    titulo: "El origen",
    duracion: 180,
    rating: 5.5,
    genero: "Ciencia ficción",
    premios: 4,
  },
];

const Table = () => {
  return (
    <div className="container">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Genero</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <TableRow
                key={index + item.titulo}
                titulo={item.titulo}
                duracion={item.duracion}
                rating={item.rating}
                genero={item.genero}
                premios={item.premios}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;