import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./Components/common/NavMenu";
import Index from "./pages/Index";
import Footer from "./Components/common/Footer";
import Administrador from "./pages/Administrador";
import Habitaciones from "./pages/habitaciones/Habitaciones";
import ItemHabitacion from "./pages/habitaciones/ItemHabitacion";
import ItemHabiJunior from "./pages/habitaciones/ItemHabiJunior";
import ItemHabiPremiun from './pages/habitaciones/ItemHabiPremiun';
import FormularioHabitacion from './pages/habitaciones/FormularioHabitacion'

function App() {
  return (
    <section>
      <NavMenu></NavMenu>
      {/*<Administrador></Administrador>*/}
      {/*<Index></Index>*/}
      {/*<ItemHabitacion></ItemHabitacion>*/}
      {/*<ItemHabiJunior></ItemHabiJunior>*/}
      {/*<ItemHabiPremiun></ItemHabiPremiun>*/}
      <FormularioHabitacion></FormularioHabitacion>
      <Footer></Footer>
    </section>
  );
}

export default App;
