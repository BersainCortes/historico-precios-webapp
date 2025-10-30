import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";

type Product = {
    id: number,
    nombre: string,
    unidad: string,
    icon: string
}

export default function ProductCardComponent({ id, nombre, unidad, icon }: Product) {
    const Icon = (LucideIcons[icon as keyof typeof LucideIcons] ??
                        LucideIcons.Package) as React.ComponentType<{ className?: string }>;

    return (
        <div
            className="bg-slate-800 rounded-2xl p-5 shadow-md shadow-slate-900/40 hover:shadow-lg hover:shadow-slate-900/60 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="flex items-center justify-between mb-3">
                <small className="px-3 py-1 bg-slate-700/70 rounded-full text-slate-300 text-sm">
                    #{id}
                </small>
                <small className="px-3 py-1 bg-slate-700/70 rounded-full text-slate-300 text-sm">
                    {unidad}
                </small>
            </div>

            <div className="flex items-center gap-3 mb-4">
                <Icon className="w-8 h-8 text-slate-600" />
                <h4 className="text-lg font-semibold text-slate-100 line-clamp-2">
                    {nombre}
                </h4>
            </div>

            <Link
                to={`/producto/${id}`}
                className="inline-block w-full text-center bg-slate-700 py-2 rounded-xl font-medium text-slate-200 hover:bg-indigo-600 transition-all duration-300"
            >
                Ver más
            </Link>
        </div>
    );
}