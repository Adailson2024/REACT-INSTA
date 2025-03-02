

export default function Story(){

const perfil=[
    {usuario:"9gag", foto:"assets/9gag.svg"},
    {usuario:"meowed", foto:"assets/meowed.svg"},
    {usuario:"barked", foto:"assets/barked.svg"},
    {usuario:"nathanwpylestrangeplanet", foto:"assets/nathanwpylestrangeplanet.svg"},
    {usuario:"wawawicomics", foto:"assets/wawawicomics.svg"},
    {usuario:"respondeai", foto:"assets/respondeai.svg" },
    {usuario:"filomoderna", foto:"assets/filomoderna.svg"},
    {usuario:"memeriagourmet", foto:"assets/memeriagourmet.svg"}  
    ];


return(
   
        <>
          {perfil.map(perfil => <Perfil foto={perfil.foto} usuario={perfil.usuario}  key={perfil.usuario}/>)} 
        </>
        
    
)
}

  
  function Perfil(props){
      return(
      <>  
      <div className="story">
      <div className="imagem">
        <img src={props.foto} alt={props.usuario}/>
      </div>
      <div className="usuario">
        {props.usuario}
      </div>
      </div>
      </>
      )
      
  }