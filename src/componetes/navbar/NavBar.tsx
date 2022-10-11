import "./NavBar.css"

type NavBarProps = {
    hasGoBack?: boolean;
}

function NavBar(props: NavBarProps){
    return(
        <nav className="mav">
            <a href="" className="brand">Pokédex</a>

            {props.hasGoBack && ( 
            <a href="" className="btn-voltar">voltar</a>)}
        </nav>
    )
}
export default NavBar;