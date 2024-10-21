import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./Components/common/NavMenu";
import Index from "./pages/Index";
import Footer from "./Components/common/Footer";
import Administrador from "./pages/Administrador";

function App() {
  return (
    <section>
     <NavMenu></NavMenu>
  <Administrador></Administrador>
      <Footer></Footer>
    </section>
  );
}

export default App;
