import styled, { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sarala:wght@400;600&display=swap');
`;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EscolhaSessao (){
const {idFilme}=useParams();
const [sessao,setSessao]=useState(null);
const navigate=useNavigate();
useEffect(()=>{
    function buscarFilme (){
        axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        .then(response => {
          setSessao(response.data);
          console.log(response.data); 
        })
        .catch(error => {
          console.error(error);
        });
      };
      
      buscarFilme();
      }, [idFilme]);

      function mostrarHorario (showtime){
        axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtime.id}/seats`)
        .then(resp => {
          console.log(resp.data); 
          navigate(`/assentos/${showtime.id}`); 
        })
        .catch(error => {
          console.error(error);
        });
      };

if(sessao===null){
    return <div>Carregando...</div>
}
return(
<div>
  <FontStyles/>
<DiaHorario>
      {sessao && (
        <>
          Selecione o horário
          <div>
            {sessao.days.map((day) => (
              <Dia data-test="movie-day" key={day.id}>
                <p>
                  {day.weekday}, {day.date}
                </p>
                <Linha></Linha>
                <Hora>
                  {day.showtimes.map((showtime) => (
                    <button
                      data-test="showtime"
                      key={showtime.id}
                      onClick={() => mostrarHorario(showtime)}
                    >
                      {showtime.name}
                    </button>
                  ))}
                </Hora>
              </Dia>
            ))}
          </div>
          
        </>
      )}
</DiaHorario>

</div>
)
}

const Linha=styled.div`
width: 100%;
top: 213px;
left: 38px;
angle: -0 deg;
border-width: 1px;
border: 1px solid #4E5A65;
`

const Dia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Sarala";
  font-size: 20px;
  color: #FFFFFF;
  padding: 0 20px;
  background: #2B2D36;
  margin-left:20px;
  margin-right:20px;
  border-radius:8px;
`;
const Hora = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin: 20px 0;
  color: #EE897F;
  button {
    cursor:pointer;
    margin-right: 20px;
    border: 2px solid #EE897F;
    border-radius:4px;
    padding:5px;
    color: #EE897F;
  }
  a {
    text-decoration: none;
    

  }
`;

const DiaHorario=styled.div`
display: flex;
  flex-direction: column;
  font-family: 'Sarala', sans-serif;
  font-size: 24px;
  text-align: center;
top: -950px;
left: -790px;
background: #212226;
margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  color: #FFFFFF;

  div {
    margin-top: 20px;
  }
`

