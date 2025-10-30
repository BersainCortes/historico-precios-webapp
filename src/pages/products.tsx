import { useState, useEffect } from "react";
import base_url from "../api/axios";
import MainLayout from "../layouts/mainLaout";
import ProductCardComponent from "../components/productCardComponent";
import ProductCardSkeletonLoaderComponent from "../components/productCardSkeletonLoaderComponent";

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
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        }

        fetchProductos();
    }, []);

    return (
        <MainLayout>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {
                    productos.length > 0 ? (
                        productos.map((producto) => (
                            <ProductCardComponent
                                key={producto.id}
                                id={producto.id}
                                nombre={producto.nombre}
                                unidad={producto.unidad}
                                icon={producto.icon}
                            />
                        ))
                    ) : (
                        Array.from({ length: 9 }).map((_, i) => <ProductCardSkeletonLoaderComponent key={i} />)
                    )
                }

            </section>
        </MainLayout>
    );
}
