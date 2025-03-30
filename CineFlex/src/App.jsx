import EscolhaFilme from "./components/EscolhaFilme"
import NavBar from "./components/NavBar"
import EscolhaSessao from "./components/EscolhaSessao"
import EscolhaAssento from "./components/EscolhaAssento"
import Sucesso from "./components/Sucesso"
import { BrowserRouter,Routes,Route } from "react-router-dom"


export default function App(){
 
    return (
                
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<EscolhaFilme/>}/>
          <Route path="/sessoes/:idFilme" element={<EscolhaSessao/>}/> 
          <Route path="/assentos/:idSessao" element={<EscolhaAssento/>}/>
          <Route path="/sucesso" element={<Sucesso/>}/>
        </Routes>       
        </BrowserRouter>
       
    )
}
