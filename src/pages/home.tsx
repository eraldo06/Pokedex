import Cards from "../componetes/cards/Cards";
import NavBar from "../componetes/navbar/NavBar";
import "./home.css";
import pokemonList from "../assets/pokemon.json"
import { useEffect } from "react";
import api from "../services/api";

function Home() {
  // estou dizendo que só quero a propiedade "pokemons"
  const {pokemons} = pokemonList;

  async function getPokemonData(){
    const {data} = await api.get("/pokemon?limit=151")
  }

  useEffect(()=>{
    getPokemonData();
  },[])

  return (
    <>
      <NavBar />
      <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

      <div className="list">
        {pokemons.map((pokemon, index) => {
          // a key é o proprio react q requer algum indentificador unico para cada Card
        return  <Cards key={index} id={pokemon.id} name={pokemon.name} types={pokemon.types} /> ;
        })}
    
        
         
      </div>
    </>
  );
}

export default Home;