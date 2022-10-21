import { useEffect, useState } from "react";
import Card, { CardPokemonProps} from "../componetes/cards/Cards";
import NavBar from "../componetes/navbar/NavBar";
import "./home.css";
import api from "../services/api";



function Home() {
  // estou dizendo que só quero a propiedade "pokemons"

  const [isLoading, setIsLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
   

  async function getPokemonData(){
    const {data} = await api.get("/pokemon?limit=151");

    const dadosCompletos = await Promise.all(
      data.results.map(async(result: {url: string})=>{
        const {data} = await api.get(result.url);


        return {
          id: data.id,
          name: data.name,
          types: data.types,
        }
      }
    ))

    setPokemonList(dadosCompletos);
    setIsLoading(false)
  }

  useEffect(()=>{
    getPokemonData();
  },[])

  if (isLoading){
    return <p>carregando</p>;
  }

  return (
    <>
      <NavBar />
      <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

      <div className="list">
        {pokemonList.map((pokemon, index) => {
          // a key é o proprio react q requer algum indentificador unico para cada Card
        return ( 
        <Card
          key={index} 
          id={pokemon.id} 
          name={pokemon.name} 
          types={pokemon.types} />)
        })}
    
        
         
      </div>
    </>
  );
}

export default Home;