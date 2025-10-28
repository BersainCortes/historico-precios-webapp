import { useState, useEffect } from "react";
import base_url from "../api/axios";
import MainLayout from "../layouts/mainLaout";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";

type Producto = {
    id: number;
    nombre: string;
    unidad: string;
    icon: string; // ej: "Milk", "Package", "ShoppingBag", etc.
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
                {productos.map((producto) => {
                    // obtiene el componente del ícono según el nombre
                    const Icon = (LucideIcons[producto.icon as keyof typeof LucideIcons] ??
                        LucideIcons.Package) as React.ComponentType<{ className?: string }>;


                    return (
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

                            <div className="flex items-center gap-3 mb-4">
                                <Icon className="w-8 h-8 text-slate-600" />
                                <h4 className="text-lg font-semibold text-slate-100 line-clamp-2">
                                    {producto.nombre}
                                </h4>
                            </div>

                            <Link
                                to={`/producto/${producto.id}`}
                                className="inline-block w-full text-center bg-slate-700 py-2 rounded-xl font-medium text-slate-200 hover:bg-indigo-600 transition-all duration-300"
                            >
                                Ver más
                            </Link>
                        </div>
                    );
                })}
            </section>
        </MainLayout>
    );
}
