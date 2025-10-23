import { Link, NavLink } from "react-router-dom"

export default function NavBarComponent() {
    return(
        <nav className="fixed w-full top-0 left-0 flex items-center justify-between px-8 py-4 bg-slate-900 text-gray-200 border-b border-slate-700">
            <div className="font-bold">
                <Link to="/" >Historico API</Link>
            </div>

            <div className="flex gap-4">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/">Productos</NavLink>
                <NavLink to="/">Documentación</NavLink>
            </div>
        </nav>
    )
}