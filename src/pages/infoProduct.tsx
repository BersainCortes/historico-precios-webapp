import { useEffect, useState } from "react";
import MainLayout from "../layouts/mainLaout";
import base_url from "../api/axios";
import { useParams } from "react-router-dom";
import { Package, Tag, Ruler } from "lucide-react";

type Producto = {
    id: number;
    nombre: string;
    unidad: string;
};

export default function InfoProduct() {
    const { id } = useParams<{ id: string }>();
    const [producto, setProducto] = useState<Producto[]>([]);

    useEffect(() => {
        async function fetchProducto() {
            try {
                console.log("ID recibido:", id);
                const response = await base_url.get(`/productos/${id}`);
                setProducto(response.data);
                console.log("Producto recibido:", response.data);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        }

        if (id) fetchProducto();
    }, [id]);

    return (
        <MainLayout>
            <section className="p-6">
                {producto.length > 0 ? (
                    <div className="bg-slate-800 rounded-2xl shadow-md shadow-slate-900/50 p-6 border border-slate-700">
                        <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-3">
                            <Package className="w-7 h-7 text-indigo-500" />
                            Detalles del producto
                        </h2>

                        <div className="space-y-3 text-slate-300">
                            <div className="flex items-center gap-2">
                                <Tag className="w-5 h-5 text-slate-500" />
                                <p>
                                    <span className="font-semibold text-slate-200">ID:</span>{" #"}
                                    {producto[0].id}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Package className="w-5 h-5 text-slate-500" />
                                <p>
                                    <span className="font-semibold text-slate-200">Nombre:</span>{" "}
                                    {producto[0].nombre}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Ruler className="w-5 h-5 text-slate-500" />
                                <p>
                                    <span className="font-semibold text-slate-200">Unidad:</span>{" "}
                                    {producto[0].unidad}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-800 rounded-2xl shadow-md shadow-slate-900/50 p-6 border border-slate-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-7 h-7 bg-indigo-500 rounded-full animate-pulse"></div>
                            <div className="h-6 w-48 bg-slate-700/60 rounded animate-pulse"></div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-slate-500 rounded-full animate-pulse"></div>
                                <div className="h-5 w-20 bg-slate-700/60 rounded animate-pulse"></div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-slate-500 rounded-full animate-pulse"></div>
                                <div className="h-5 w-36 bg-slate-700/60 rounded animate-pulse"></div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-slate-500 rounded-full animate-pulse"></div>
                                <div className="h-5 w-24 bg-slate-700/60 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </MainLayout>
    );
}
