import React, { useState } from "react";
export default function Post(){

  const [postagens,setPostagens]=React.useState([
    {nome:"meowed", 
    imagemperfil:"assets/meowed.svg", 
    imagempostagem:"assets/gato-telefone.svg",
    curtidopor:"responde ai e outras",
    curtidas:101523,
  },
    {nome:"barked", 
     imagemperfil:"assets/barked.svg", 
     imagempostagem:"assets/dog.svg",
     curtidopor:"responde ai e outras",
     curtidas:99159,
    },
    {nome:"barked2 ", 
      imagemperfil:"assets/barked.svg", 
      imagempostagem:"assets/dog.svg",
      curtidopor:"responde ai e outras",
      curtidas:99159,
     }
  ]);
  function atualizarIconeCoracao(iconeCoracao, curtiu) {
    if (iconeCoracao) {
      iconeCoracao.classList.toggle("coracao-ativo", curtiu); 
    }
  }
  
  function curtir(index) {
    const novosPosts = [...postagens];
    novosPosts[index].curtidas += novosPosts[index].curtiu ? -1 : 1;
    novosPosts[index].curtiu = !novosPosts[index].curtiu;
    setPostagens(novosPosts);
  
    const iconeCoracao = document.querySelector(`.post:nth-of-type(${index + 1}) .icone-coracao`);
    atualizarIconeCoracao(iconeCoracao, novosPosts[index].curtiu);
  }
  
    return(
      <> {postagens.map((post, index) =>
        (<div className="posts" key={post.nome}>
          <div className="post" data-post-id={post.nome}>
            <div className="topo">
              <div className="usuario">
                <img src={post.imagemperfil} alt="meowed"/>
                {post.nome}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              
              <img data-test="post-image" onDoubleClick={() => curtir(index)} 
              className="img-post"
              src={post.imagempostagem}
              data-post-id={post.nome}/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon data-post-id="like-post"
                  onClick={(e) => {
                    curtir(index);
                  }}
                  name={post.curtiu ? "heart" : "heart-outline"}
                  style={{ color: post.curtiu ? "red" : "black" }} 
                  class="icone-coracao"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post"
                  onClick={(event) => {
                    event.target.name =
                      event.target.name === "bookmark"
                        ? "bookmark-outline"
                        : "bookmark";
                  }}
                  name="bookmark-outline"
                  class="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src="assets/respondeai.svg" alt="respondeai"/>
                <div className="texto">
                  Curtido por <strong>{post.curtidopor}</strong> e <strong>outras {post.curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
    </>
  );
} 
