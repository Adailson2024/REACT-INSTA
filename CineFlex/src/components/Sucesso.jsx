import { useLocation, Link } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sarala:wght@400;600&display=swap');
 
`;

export default function Sucesso() {
  const location = useLocation();
  const { movieTitle, session, selectedSeats, nome, cpf } =
    location.state || {};

  return (
    <>
    <FontStyles/>
    <Comprovante>
      <Fim>Pedido finalizado!</Fim>
      <Escolhas> 
      <ResumoPedido data-test="filme">
        <strong>Filme e sessão</strong>
        <Linha></Linha>
        <p>{movieTitle}</p>
        <p>{session}</p>
      </ResumoPedido>
      
      <ResumoPedido data-test="ingressos">
        <strong>Ingressos</strong>
        <Linha></Linha>
        {selectedSeats &&
          selectedSeats.map((assento) => <p key={assento}>Assento {assento}</p>)}
      </ResumoPedido>
      
      <ResumoPedido data-test="comprador">
        <strong>Comprador</strong>
        <Linha></Linha>
        <p>Nome: {nome}</p>
        <p>CPF: {cpf}</p>
      </ResumoPedido>
      </Escolhas>
      <Link to="/">
        <Button data-test="botao">Voltar para tela inicial</Button>
      </Link>
    </Comprovante>
    </>
  );
}
const Linha=styled.div`

width: 302.00000000000114px;
top: 354px;
left: 38px;
angle: -0 deg;
border-width: 1px;
border: 1px solid #4E5A65
`
const Escolhas=styled.div`
width: 338px;
height: 100%;
top: 147px;
left: 19px;
border-radius: 8px;
background: #2B2D36;

`
const Comprovante = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Sarala', sans-serif;
  font-size: 24px;
  background:#212226;
  margin: 30px 20px;
  padding-bottom: 120px;
  padding-top: 70px;
  a {
    text-decoration: none;
  }
`;

const Fim = styled.div`
 
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #9DB899;
`;

const ResumoPedido = styled.div`
  width: 100%;
  display: flex;
  margin-left:20px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-top: 30px;
  color:#ffffff;
  font-family: 'Sarala', sans-serif;

font-size: 20px;
line-height: 100%;
letter-spacing: 4%;
vertical-align: middle;

  strong {
    color: #EE897F;
    margin-bottom: 10px;
    font-size: 22px;
  }
`;

const Button = styled.button`
  margin-top: 50px;
  width: 338px;
height: 42px;
top: 590px;
left: 19px;
border-radius: 8px;
background: #EE897F;
color: #2B2D36;
font-family: Sarala;
font-weight: 700px;
font-size: 18px;
line-height: 100%;
letter-spacing: 4%;
text-align: center;
vertical-align: middle;
font-weight: bold;

`;