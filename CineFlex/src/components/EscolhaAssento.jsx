import styled, { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sarala:wght@400;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
`;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ItemAssento from "./ItemAssento";

export default function EscolhaAssento() {
  const navigate = useNavigate();
  const { idSessao } = useParams();
  const [assento, setAssento] = useState(null);
  const [assentosSelecionados, setAssentosSelecionados] = useState([]);
  const [nomeComprador, setNomeComprador] = useState("");
  const [cpfComprador, setCpfComprador] = useState("");
  const [tituloFilme, setTituloFilme] = useState("");

  useEffect(() => {
    function buscarAssentos() {
      axios
        .get(
          `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        )
        .then((response) => {
          setAssento(response.data);
          setTituloFilme(response.data?.movie?.title || "");
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    buscarAssentos();
  }, [idSessao]);

  const { name, day, movie, seats: dadosAssentos } = assento || {};

  function escolherAssento(idAssento) {
    const assentoSelecionado = dadosAssentos.find((assento) => assento.id === idAssento);

    if (assentoSelecionado) {
      if (!assentoSelecionado.isAvailable) {
        alert("Esse assento não está disponível");
        return;
      }

      if (assentosSelecionados.includes(idAssento)) {
        setAssentosSelecionados(
          assentosSelecionados.filter((assentoId) => assentoId !== idAssento)
        );
      } else {
        setAssentosSelecionados([...assentosSelecionados, idAssento]);
      }
    }
  }

  function reservar() {
    if (assentosSelecionados.length === 0) {
      alert("Selecione ao menos 1 assento para poder prosseguir.");
      return;
    }
    if (nomeComprador.trim() === "" || cpfComprador.trim() === "") {
      alert("Preencha todos os dados para finalizar sua compra!");
      return;
    }

    axios
      .post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        {
          ids: assentosSelecionados,
          name: nomeComprador,
          cpf: cpfComprador,
        }

      )
      .then((response) => {
        console.log(response.data);

        return axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        );
      })
      .then((updatedResponse) => {
        // setSeats(updatedResponse.data); // Você já está usando setAssento para atualizar os assentos
        // dadosAssentos já deve estar atualizado com a nova resposta

        const assentosSelecionadosIcone = dadosAssentos.filter((assento) => 
          assentosSelecionados.includes(assento.id)
        );

        const assentosSelecionadosNome = assentosSelecionadosIcone.map((assento) => assento.name); // Renomeado

        navigate("/sucesso", {
          state: {
            movieTitle: tituloFilme,
            session: `${day?.date} - ${name}`,
            selectedSeats: assentosSelecionadosNome, 
            nome: nomeComprador, 
            cpf: cpfComprador, 
            seatsData: dadosAssentos, 
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (assento === null) {
    return <div>Carregando...</div>;
  }

  return (
    <>
    <FontStyles/>
    <PaginaComAssentos>
      Selecione o(s) assento(s)
      <EscolherAssentos>
        {dadosAssentos &&
          dadosAssentos.map((assento) => (
            <ItemAssento
              key={assento.id}
              idAssento={assento.name}
              disponivel={assento.isAvailable}
              selecionado={assentosSelecionados.includes(assento.id)}
              onClick={() => escolherAssento(assento.id)}
            />
          ))}
      </EscolherAssentos>
      <Linha></Linha>
      <Formulario>
        Nome do comprador(a):
        <input
          data-test="nome"
          placeholder="Digite seu nome..."
          value={nomeComprador}
          onChange={(e) => setNomeComprador(e.target.value)}
        />
        CPF do comprador(a):
        <input
          data-test="cpf"
          placeholder="Digite seu CPF..."
          value={cpfComprador}
          onChange={(e) => setCpfComprador(e.target.value)}
          pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
          required
        />
        <button data-test="reserva-assento" onClick={reservar}>
          Reservar Assento(s)
        </button>
      </Formulario>
      
    </PaginaComAssentos>
    </>
  );
}

const Linha=styled.div`
width: 300px;
top: 213px;
left: 38px;
angle: -0 deg;
border-width: 1px;
border: 1px solid #4E5A65;
margin-left:30px;
`

const PaginaComAssentos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Sarala', sans-serif;
  font-size: 24px;
  color: #FFFFFF;
  background: #212226;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;

const EscolherAssentos = styled.div`
  width: 338px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  color: #2B2D36;
  margin-left:60px;
`;
const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 40px;
font-size: 16px;
  input {
    width: 338px;
    height: 40px;
    top: 438px;
    left: 19px;
    border-width: 1px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 16px;
    font-style: italic;
    border: 1px solid #D4D4D4
    color:#AFAFAF;
    font-family:'Roboto', sans-serif;
  }

  button {
    font-weight: bold;
    background-color: #EE897F;
    color: #2B2D36;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    width: 338PX;
    height: 42PX;
    top: 590px;
    left: 20px
  }
`;

