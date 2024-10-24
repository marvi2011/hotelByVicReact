import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioHabitacion = () => {
  return (
    <body>
      <div className="d-flex justify-content-between align-items-center mt-5 container bg-info-subtle text-center py-5">
        <h1 className="display-4">Habitaciones</h1>
      </div>
      <hr className="border border-info border-3 opacity-75"></hr>
      <Form className="container">
        <Form.Group className="mb-3" controlId="formNumHabitacion">
          <Form.Label>Número de Habitación</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese número de habitación"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumHabitacion">
          <Form.Label>Precio </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese número precio de la habitacion por noche"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumHabitacion">
          <Form.Label>Categoría </Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Seleccione una categoría</option>
            <option value="1">Standar</option>
            <option value="2">Junior</option>
            <option value="3">Premiun</option>
          </Form.Select>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumHabitacion">
        <Form.Label>Observacion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
       
        <Button variant="info" type="submit">
          Guardar
        </Button>
      </Form>
    </body>
  );
};

export default FormularioHabitacion;
