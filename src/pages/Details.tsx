import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import NavBar from "../componetes/navbar/NavBar";
import Badge from "../componetes/badge/Badge";
import { CardPokemonProps } from "../componetes/cards/Cards";
import api from "../services/api";

import {Container, Imagem, Card, Number, Title} from "./Details.style"


function Details(){
    // ela vai pegar o id da url
    const {id} = useParams();
    const [isLoading, setIsLoading ] = useState(true);
    const [pokemonData, setPokemonData] = useState<CardPokemonProps>(
        {} as CardPokemonProps
    );

    async function GetPokemonData() {
        const { data } = await api.get("pokemon/" + id);

        setPokemonData ({
            id: data.id,
            name: data.name,
            types: data.types,
        });  

        setIsLoading(false)
    }

        useEffect(() => {
            GetPokemonData();
        },[]);
  
    if (isLoading){
        return <p>carregando</p>
    }

    return (
        <>
            <NavBar/>
            {/* se o id da url for igual o id do banco de dados ? faça isso */}

            <Container>
                <Imagem src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemonData.name}/>

                <Card
                    className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}
                    >
        
                <Number>#{String(id).toString().padStart(3, "0")}</Number>
                <Title>{GetPokemonData.name}</Title>

                {pokemonData.types.map((item: any, index: any)=>{
                    return <Badge key={index} name={item.type.name}/>
                    
                })}
                </Card>

            </Container>




            
        </>
        )
    }

export default Details;