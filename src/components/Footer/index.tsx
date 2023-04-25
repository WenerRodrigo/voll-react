import styled from "styled-components";
import facebook from "./assets/facebook.png";
import whatsapp from "./assets/whatsapp.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";


const RodapeEstilizado = styled.footer`
  height: 100%;
  color: #fff;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`;

const ItemEstilizado = styled.li`
  list-style-type: none;
`;

function Footer() {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href="#">
            <img src={facebook} alt="logo do facebook" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={whatsapp} alt="logo do whatsapp" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={google} alt="logo do google" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={instagram} alt="logo do instagram" />
          </a>
        </ItemEstilizado>
      </ListaEstilizada>
      <p>
        2023 © Desenvolvido por Wener | Projeto fictício sem fins comerciais.
      </p>
    </RodapeEstilizado>
  );
}

export default Footer;
