import { type } from "@testing-library/user-event/dist/type";
import "./badge.css"

type BadgeProps = {
    name: string
}

function Badge(props: BadgeProps){
    return <span className={`badge type--${props.name.toLowerCase()}`}>{props.name}</span>
}

export default Badge;