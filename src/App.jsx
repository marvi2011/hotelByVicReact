import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./Components/common/NavMenu";
import Index from "./pages/Index";
import Footer from "./Components/common/Footer";

function App() {
  return (
    <section>
      <NavMenu></NavMenu>
    <Index></Index>
      <Footer></Footer>
    </section>
  );
}

export default App;
