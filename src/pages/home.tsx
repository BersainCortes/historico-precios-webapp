import MainLayout from "../layouts/mainLaout";

export default function Home() {
    return (
        <MainLayout>
            <section className="flex flex-col items-center justify-center text-center py-16">
                <h1 className="text-4xl font-bold text-white mb-4">Bienvenido a HistóricoAPI</h1>
                <p className="text-gray-400 text-lg max-w-xl">Consulta precios históricos de productos de manera gratuita.</p>
            </section>
        </MainLayout>
    )
}