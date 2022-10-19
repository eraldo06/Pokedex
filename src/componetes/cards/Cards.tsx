import "./cards.css";
import "../../pages/home.css"
import {Link} from "react-router-dom";

type PokemonTypeProps ={
  type:{
    name:string;
  }
}

type CardPokemonProps = {
  id: number;
  name: string;
  types: Array<PokemonTypeProps>;
}


function Cards(props: CardPokemonProps){
    return(
      <Link to={`/details/${props.id}`}>
        <div className={`card type--${props.types[0].type.name.toLowerCase()}`}>
        <div className="info">
          <span className="info__number">#{props.id.toString().padStart(3, "0")}</span>
          <p className="info__name">{props.name}</p>

          <p>{props.types[0].type.name}</p>
         
        </div>
        <img
          className="card__img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
          alt={props.name}
        />
      </div>
      </Link>
      
    )
}

export default Cards;