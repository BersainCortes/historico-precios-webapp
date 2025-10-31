import { Package, Tag, Ruler } from "lucide-react";

type Producto = {
    id: number,
    nombre: string,
    unidad: string
}

export default function ProductDetailsComponent({ id, nombre, unidad }:Producto) {
    return (
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
                        {id}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-slate-500" />
                    <p>
                        <span className="font-semibold text-slate-200">Nombre:</span>{" "}
                        {nombre}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-slate-500" />
                    <p>
                        <span className="font-semibold text-slate-200">Unidad:</span>{" "}
                        {unidad}
                    </p>
                </div>
            </div>
        </div>
    );
}