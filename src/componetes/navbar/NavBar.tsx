import "./NavBar.css"
import {Link} from "react-router-dom";

type NavBarProps = {
    hasGoBack?: boolean;
}

function NavBar(props: NavBarProps){
    return(
        <nav className="mav">
            <Link to="/" className="brand">Pokédex</Link>

            {props.hasGoBack && ( 
            <Link to="/" className="btn-voltar">voltar</Link>
            )}
        </nav>
    )
}
export default NavBar;