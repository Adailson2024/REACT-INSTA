import React from "react";
import styled from "styled-components";
import ZapRecall from "./ZapRecall";


export default function PaginaInicial(){
  

  return (
    <TelaInicial>
      
        <ZapRecall />
      
    </TelaInicial>
  );
};


const TelaInicial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;