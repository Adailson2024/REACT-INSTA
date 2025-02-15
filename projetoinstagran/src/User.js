import React, { useState } from "react";
export default function User(){
  const imagemInicial="assets/catanacomics.svg";
  const [nome,setNome]=React.useState("catanacomics");
  const [avatar,setAvatar]=React.useState(imagemInicial);
  function inserirNome(){
   const nomeDigitado=prompt("Qual é o seu nome?");
   setNome(nomeDigitado);
  }
  function mudarImagem(){
      const linkDigitado=prompt("Digite o link da sua imagem.");
      setAvatar(linkDigitado);
     }
  return(
        <div className="usuario">
          <img onClick={mudarImagem} src={avatar} alt="imagem de perfil"/>
          <div className="texto">
            <span>
              <strong>{nome}</strong>
              <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}