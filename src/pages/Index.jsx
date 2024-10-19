import { Container, Row } from "react-bootstrap";
import Habitaciones from "./habitaciones/Habitaciones";


const Index = () => {
    return (
        <section>
            <h1 className="display-3 text-center">Hotel Refugio de las Nubes</h1>
            <h2 className="display-5 text-center">Nuestras Habitaciones</h2>
            <Container className="mainSection mt-5">
                <Row>
                    <Habitaciones></Habitaciones>
                    <Habitaciones></Habitaciones>
                   <Habitaciones></Habitaciones>
                </Row>
            </Container>
        </section>
    );
};

export default Index;