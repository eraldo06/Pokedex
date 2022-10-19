import NavBar from "../componetes/navbar/NavBar";
import {useParams} from "react-router-dom"
import pokemonList from "../assets/pokemon.json"

function Details(){
    // ela vai pegar o id da url
    const {id} = useParams();

    // ela vai pegar o pokemon do banco de dados
    const {pokemons}= pokemonList;


    return (
        <>
            <NavBar/>
            {/* se o id da url for igual o id do banco de dados ? faça isso */}
            <h1>{pokemons.find((pokemon)=> String(pokemon.id) == id)?.name}</h1>

            
        </>
        )
    }

export default Details;