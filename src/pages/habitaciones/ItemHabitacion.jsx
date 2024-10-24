import { Button } from "react-bootstrap";
import suiteStandar from '../../assets/suiteStandar2.png'
import bañoStandar from '../../assets/bañoStandar.jpeg'
import vistaPiscina from '../../assets/vistaPiscina.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ItemHabitacion = () => {
    return (
       
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5 container-fluid bg-success-subtle text-center py-5">
          <h1 className="display-4">Suite Standar</h1>
          </div>;
          <Container>
    
      <Row>
        <Col>
        <img className="img-fluid"
        src={suiteStandar}
        alt=""/>
        </Col>
        <Col>
        <img className="img-fluid"
        src={bañoStandar}
        alt=""
        /></Col>
        <Col>
        <img className="img-fluid"
        src={vistaPiscina}
        alt=""
        /></Col>
      </Row>
    </Container>
        
        </section>
    );
};

export default ItemHabitacion;