import React from 'react';
import PropsTypes from "prop-types";
import "../assets/css/myStyle.css";

function Fila(props) {
  return (
    <tr>
      <td>{props.titulo}</td>
      <td>{props.duracion}</td>
      <td>{props.rating}</td>
      <td>
        <ul>
          {props.genero.map((genero, index) => {
            return (
              <li {...genero} key={index}>
                {props.genero[index]}
              </li>
            );
          })}
        </ul>
      </td>
      <td>{props.premios}</td>
    </tr>
  );
}

Fila.PropsTypes = {
  titulo: PropsTypes.string.isRequired,
  duracion: PropsTypes.number.isRequired,
  rating: PropsTypes.number.isRequired,
  genero: PropsTypes.array.isRequired,
  premios: PropsTypes.number.isRequired,
};
Fila.defaultProps = {
  titulo: "No tiene titulo",
  duracion: 0,
  rating: 0,
  genero: "sin género",
  premios: 0,
};

export default Fila;
