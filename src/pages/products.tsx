import { useState, useEffect } from "react";
import base_url from "../api/axios";
import MainLayout from "../layouts/mainLaout";
import { Link } from "react-router-dom";

type Producto = {
    id: number;
    nombre: string;
    unidad: string;
};

export default function Products() {
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        async function fetchProductos() {
            try {
                const response = await base_url.get("/productos");
                setProductos(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        }

        fetchProductos();
    }, []);

    return (
        <MainLayout>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {productos.map((producto) => (
                    <div
                        key={producto.id}
                        className="bg-slate-800 rounded-2xl p-5 shadow-md shadow-slate-900/40 hover:shadow-lg hover:shadow-slate-900/60 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <small className="px-3 py-1 bg-slate-700/70 rounded-full text-slate-300 text-sm">
                                #{producto.id}
                            </small>
                            <small className="px-3 py-1 bg-slate-700/70 rounded-full text-slate-300 text-sm">
                                {producto.unidad}
                            </small>
                        </div>

                        <h4 className="text-lg font-semibold text-slate-100 mb-4 line-clamp-2">
                            {producto.nombre}
                        </h4>

                        <Link
                            to={`/producto/${producto.id}`}
                            className="inline-block w-full text-center bg-slate-700 py-2 rounded-xl font-medium text-slate-200 hover:bg-indigo-600 transition-all duration-300"
                        >
                            Ver más
                        </Link>
                    </div>
                ))}
            </section>
        </MainLayout>
    );
}
