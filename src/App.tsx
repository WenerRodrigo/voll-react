import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
      <Footer />
    </>
  );
}

export default App;
