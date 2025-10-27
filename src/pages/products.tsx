import { useState, useEffect } from "react";
import base_url from "../api/axios";
import MainLayout from "../layouts/mainLaout";

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
            <section>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        {producto.id} - {producto.nombre} - {producto.unidad}
                    </li>
                ))}
            </section>
        </MainLayout>
    );
}
