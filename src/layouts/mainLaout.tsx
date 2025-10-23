import type { ReactNode } from "react"
import NavBarComponent from "../components/navBarComponent"

type Props = {
    children?: ReactNode
}

export default function MainLayout({ children }: Props) {
    return (
        <div>
            <header>
                <NavBarComponent></NavBarComponent>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p> © { new Date().getFullYear() } Historico Precios API </p>
            </footer>
        </div>
    )
}