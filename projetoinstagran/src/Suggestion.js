export default function Suggestion(){
    const sugestao=[
        {nome:"bad.vibes.memes",img:"assets/bad.vibes.memes.svg"},
        {nome:"chibirdart",img:"assets/chibirdart.svg"},
        {nome:"razoesparaacreditar",img:"assets/razoesparaacreditar.svg"},
        {nome:"adorable_animals",img:"assets/adorable_animals.svg"},
        {nome:"smallcutecats",img:"assets/smallcutecats.svg"}
       ];
    return(
        
       <> 
{sugestao.map(sugestao => <Sugestao img={sugestao.img} nome={sugestao.nome}  key={sugestao.nome}/>)} 
      </>       
       
    )
}

function Sugestao(props){
    return(
    <>  
    <div className="sugestao">
              <div className="usuario">
                <img src={props.img} alt={props.nome}/>
                <div className="texto">
                  <div className="nome">{props.nome}</div>
                  <div className="razao">Segue você</div>
                </div>
              </div>
  
              <div className="seguir">Seguir</div>
    </div>        
    </>
    )
    
}