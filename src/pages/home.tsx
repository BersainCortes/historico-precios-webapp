import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLaout";

export default function Home() {
    return (
        <MainLayout>
            <section className="flex flex-col items-center justify-center text-center py-16">
                <h1 className="text-4xl font-bold text-white mb-4">Bienvenido a HistóricoAPI</h1>
                <p className="text-gray-400 text-lg max-w-xl">Consulta precios históricos de productos de manera gratuita.</p>
                <Link to="/productos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" /><path d="M12 22V12" /><polyline points="3.29 7 12 12 20.71 7" /><path d="m7.5 4.27 9 5.15" /></svg>
                    Ver productos
                </Link>
            </section>
        </MainLayout>
    )
}