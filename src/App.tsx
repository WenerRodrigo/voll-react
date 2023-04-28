import "./App.css";
import Container from "./components/Container";
import Botao from "./components/Botao";
import Footer from "./components/Footer";
import Grafico from "./components/Grafico";
import Header from "./components/Header";
import Tabela from "./components/Tabela";
import Titulo from "./components/Titulo";
import useDadosConsulta from "./useDadosConsulta";
import useDadosProfissional from "./useDadosProfissional";
import Subtitulo from "./components/Subtitulo";
import Avaliacao from "./components/Avaliacao";

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição")
  }
  return (
    <>
      <Header />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar Especialista</Botao>
        <Titulo imagem="grafico">Consultas do Dia</Titulo>
        <Tabela consultas={consultas}/>
        <Titulo imagem="grafico">Consultas mensais por Especialistas</Titulo>
        <Subtitulo>Abril/23</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais}/>
        <Titulo imagem="avaliacao">Avaliações de Especialistas</Titulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
