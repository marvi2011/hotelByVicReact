import { Table } from "react-bootstrap";

const Administrador = () => {
  return (
    <div>
      <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5 container-fluid bg-success-subtle text-center py-5">
          <h1 className="display-4">Habitaciones disponibles</h1>
          <hr className="border border-info border-3 opacity-75"></hr>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Cod</th>
              <th>Número de Habitación</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Administrador;
