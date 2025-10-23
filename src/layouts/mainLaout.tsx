import type { ReactNode } from "react"
import NavBarComponent from "../components/navBarComponent"

type Props = {
    children?: ReactNode
}

export default function MainLayout({ children }: Props) {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-gray-200">
            <header className="z-10">
                <NavBarComponent></NavBarComponent>
            </header>
            <main className="grow container mx-auto px-6 py-24">
                {children}
            </main>
            <footer className="border-t border-slate-700 py-6 text-center text-sm text-gray-400">
                <p> © { new Date().getFullYear() } Historico Precios API </p>
            </footer>
        </div>
    )
}