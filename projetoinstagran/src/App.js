import NavBar from "./NavBar";
import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";


export default function App() {
    return (
        <>
            <NavBar/>
    <div className="corpo">
      <div className="esquerda">
       <Stories/>
       <Posts/>
      </div>
    <Sidebar/>
      
    </div>
        </>
    )
}