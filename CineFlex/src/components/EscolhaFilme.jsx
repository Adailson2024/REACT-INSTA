import styled, { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sarala:wght@400;600&display=swap');
`;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EscolhaFilme (){
const [filmes,setFilmes]=useState(null);
useEffect(()=>{const promise=axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
    promise.then((response=> setFilmes(response.data)));
    promise.catch((error)=>console.log(error.response.data));},[]);
if(filmes===null){
    return <div>Carregando...</div>
}
return(
<>
<FontStyles/>
    <TelaFilmes>
        Em Cartaz
        <Filmes>
            
            {filmes.map(filme=>(
                <Filme key={filme.id} to={`/sessoes/${filme.id}`}>
                <img src={filme.posterURL}/>
                </Filme>
            ))}
            
        </Filmes>
    </TelaFilmes>
    </>
)
}

const TelaFilmes=styled.div`
/* width: 375px;
height: 780px; */
top: -950px;
left: -790px;
background: #212226;
display:flex;
flex-direction:column;
margin-top: 6px;
padding-top: 70px;
aling-items:center;
justify-content:center;
font-family: 'Sarala', sans-serif;
top: 67px;   
font-weight: 400px;
font-size: 24px;
line-height: 100%;
letter-spacing: 4%;
text-align: center;
vertical-align: middle;
color: #FFFFFF;
`
const Filmes=styled.div`
display:flex;
aling-items:center;
flex-wrap:wrap;
margin-left:10px;
justify-content:center
width: 375px;
height: 780px;

`

const Filme=styled(Link)`
display:flex;
padding:10px;
cursor:pointer;
img{
width: 145px;
height: 210px;
top: 145px;
left: 29px;
border-radius: 8px;
}
`