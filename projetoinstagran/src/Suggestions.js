export default function Suggestions(){
  const sugestao=[
   {nome:"bad.vibes.memes",img:"assets/bad.vibes.memes.svg"},
   {nome:"chibirdart",img:"assets/chibirdart.svg"},
   {nome:"razoesparaacreditar",img:"assets/razoesparaacreditar.svg"},
   {nome:"adorable_animals",img:"assets/adorable_animals.svg"},
   {nome:"smallcutecats",img:"assets/smallcutecats.svg"}
  ];
    return(
        <div className="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          <>{sugestao.map((sug)=> (
          <div className="sugestao">
            <div className="usuario">
              <img src={sug.img} alt={sug.nome}/>
              <div className="texto">
                <div className="nome">{sug.nome}</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>))};
          </>

        </div>
    )
}