import Cards from "../componetes/cards/Cards";
import NavBar from "../componetes/navbar/NavBar";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

      <div className="list">
      <Cards/>    
      <Cards/>    
      <Cards/>    
        

        
         
      </div>
    </>
  );
}

export default Home;