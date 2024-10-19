import { Card, Col, Button } from "react-bootstrap";

const Habitaciones = () => {
  return (
    <div>
      <Col md={4} lg={3} className="mb-5">
        <Card className="h-100">
          <div>
            <img
              src="https://lh3.googleusercontent.com/gg/ACM6BItch7VclwRxzS8lC2mNB7NnvcRQGgBDtEt7qoE8R9vuWnAAya1WLIrzORnDNvLHgV8-aD_XQiBBT6sdUsHK2ipEa7q2ARSHQtwRjpT3WzFONOA5F3ta4_vzfIqtOFIH0caMnKmAg30ZHKG8tAapEvu_r90F5jRPMXId_86lKudeu7rtVXQ=s1024"
              alt="Suite Standar"
              className="w-100"
            />
          </div>
          <Card.Body>
            <Card.Title className="primary-font text-center">Suite Standar</Card.Title>
            <Card.Text>
              <b>Descripción:</b> Nuestra Suite Standar es el lugar perfecto para
              aquellos que buscan un ambiente minimalista y funcional. Con
              líneas limpias y una paleta de colores neutros, esta habitación
              crea un espacio tranquilo y acogedor. Disfruta de un sueño
              reparador en nuestra cama de última generación y relájate en el
              cómodo sofá. 
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button className="btn btn-success" to="/detalleProducto">
              Ver más
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Habitaciones;
