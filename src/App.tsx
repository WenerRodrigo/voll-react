import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tabela from "./components/Tabela";
import Titulo from "./components/Titulo";
import useDadosConsulta from "./useDadosConsulta";

function App() {
  const { dados, erro } = useDadosConsulta();
  return (
    <>
      <Header />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela />
      </Container>
      <Footer />
    </>
  );
}

export default App;
