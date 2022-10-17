import Cards from "../componetes/cards/Cards";
import NavBar from "../componetes/navbar/NavBar";
import "./home.css";

function Home() {
  return (
    <>
      <NavBar />
      <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

      <div className="list">
      
      <Cards/>   
        
         
      </div>
    </>
  );
}

export default Home;