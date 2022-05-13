import "../assets/css/myStyle.css";
import Fila from "./Fila";

let billyElliot = {
  titulo: "Billy Elliot",
  duracion: 123,
  rating: 5,
  genero: ["drama", "comedia"],
  premios: 2,
};

let alicia = {
  titulo: "Alicia en el pais de las maravillas",
  duracion: 142,
  rating: 4.8,
  genero: ["drama", "comedia", "acción"],
  premios: 3,
};

let peliculas = [billyElliot, alicia];

function Tabla() {
  return (
    <div
      className="container-fluid borderTabla"
      id="dataTable"
      width="100%"
      cellspacing="0"
    >
      <table className="tabla">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Calificación</th>
            <th>Premios</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Calificación</th>
            <th>Premios</th>
            <th>Duración</th>
          </tr>
        </tfoot>
        <body>
          {peliculas.map((element, index) => {
            /* crea una card por cada cardsProps */
            return <Fila {...element} key={index} />;
          })}
        </body>
      </table>
    </div>
  );
}
export default Tabla;
