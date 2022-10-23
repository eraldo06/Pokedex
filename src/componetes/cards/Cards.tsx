
import {Link} from "react-router-dom";
import Badge from "../badge/Badge";

import {Card, Title, Number, Imagem} from "./Card.style"

type PokemonTypeProps ={
  type:{
    name:string;
  }
}

export type CardPokemonProps = {
  id: number;
  name: string;
  types: Array<PokemonTypeProps>;
}


function Cards(props: CardPokemonProps){
    return(
      <Link to={`/details/${props.id}`}>
        <Card className={`type--${props.types[0].type.name.toLowerCase()}`}>
        <div>
          <Number>#{props.id.toString().padStart(3, "0")}</Number>
          <Title>{props.name}</Title>

          {props.types.map((item, index)=>{
            return <Badge key={index} name={item.type.name}/>;
          })}
       
        </div>
        <Imagem
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
          alt={props.name}
        />
      </Card>
      </Link>
      
    )
}

export default Cards;