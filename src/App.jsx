import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./pages/Index";
import Administrador from "./pages/Administrador";
import Habitaciones from "./pages/habitaciones/Habitaciones";
import ItemHabitacion from "./pages/habitaciones/ItemHabitacion";
import ItemHabiJunior from "./pages/habitaciones/ItemHabiJunior";
import ItemHabiPremiun from "./pages/habitaciones/ItemHabiPremiun";
import FormularioHabitacion from "./pages/habitaciones/FormularioHabitacion";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Index></Index>}></Route>
    <Route path="/administrador" element={<Administrador></Administrador>}></Route>
    <Route path="/administrador/crearHabitacion" element={<FormularioHabitacion></FormularioHabitacion>}></Route>
    <Route path="/administrador/editarHabitacion"element={<FormularioHabitacion></FormularioHabitacion>}></Route>
    <Route path="/administrador/eliminarHabitacion"element={<FormularioHabitacion></FormularioHabitacion>}></Route>
    <Route path="/inicio/catalogoHabitaciones" element={<Habitaciones></Habitaciones>}></Route>


   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
