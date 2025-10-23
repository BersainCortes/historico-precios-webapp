import { Link, NavLink } from "react-router-dom"

export default function NavBarComponent() {
    return(
        <nav>
            <div>
                <Link to="/">Historico API</Link>
            </div>

            <div>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/">Productos</NavLink>
                <NavLink to="/">Documentación</NavLink>
            </div>
        </nav>
    )
}