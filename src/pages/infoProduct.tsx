import { useEffect, useState } from "react";
import MainLayout from "../layouts/mainLaout";
import base_url from "../api/axios";
import { useParams } from "react-router-dom";
import ProductDetailsComponent from "../components/productDetailsComponent";
import ProductDetailsSkeletonLoaderComponent from "../components/productDetailsSkeletonLoaderComponent";

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
                const response = await base_url.get(`/productos/${id}`);
                setProducto(response.data);
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
                    <ProductDetailsComponent id={ producto[0].id } nombre={ producto[0].nombre } unidad={ producto[0].unidad }></ProductDetailsComponent>
                ) : (
                    <ProductDetailsSkeletonLoaderComponent></ProductDetailsSkeletonLoaderComponent>
                )}
            </section>
        </MainLayout>
    );
}
