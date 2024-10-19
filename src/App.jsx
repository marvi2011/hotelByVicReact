
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './Components/common/NavMenu';
import Footer from './Components/common/Footer';
import Habitaciones from './pages/Habitaciones';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
  <section>
  <NavMenu></NavMenu>
  <h1 className='text-center mt-3 display-3'>HOTEL REFUGIO DE LAS NUBES</h1>
  <Container className='mainSection mt-5'>
    <Row className='display-flex'>
  <Habitaciones></Habitaciones>
  <Habitaciones></Habitaciones>
  <Habitaciones></Habitaciones>
  </Row>
  </Container>
  <Footer></Footer>
  </section>
  );
};

export default App;