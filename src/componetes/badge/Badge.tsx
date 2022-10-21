import { type } from "@testing-library/user-event/dist/type";
// import "./badge.css"
import {Container} from "./Badge.style"

type BadgeProps = {
    name: string
}

function Badge(props: BadgeProps){
    return(
     <Container className={"type--" + props.name.toLowerCase()}>
     {props.name}
     </Container>
     )
    
}

export default Badge;