import { useEffect, useState } from "react";
import MainLayout from "../layouts/mainLaout";
import base_url from "../api/axios";
import { useParams } from "react-router-dom";
import ProductDetailsComponent from "../components/productDetailsComponent";
import ProductDetailsSkeletonLoaderComponent from "../components/productDetailsSkeletonLoaderComponent";
import HistoricalChartComponent from "../components/historicalChartComponent";

type Producto = {
    id: number;
    nombre: string;
    unidad: string;
};

type Precios = {
    anio: number;
    fuente: string;
    precio: number;
};

export default function InfoProduct() {
    const { id } = useParams<{ id: string }>();
    const [producto, setProducto] = useState<Producto[]>([]);
    const [precios, setPrecios] = useState<Precios[]>([]);

    useEffect(() => {
        async function fetchProducto() {
            try {
                const resProducto = await base_url.get(`/productos/${id}`);
                setProducto(resProducto.data);
                const resPrecio = await base_url.get(`/precios/${id}`);
                setPrecios(resPrecio.data);
                console.log(resPrecio.data);
                
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

                <div className="mt-10 p-5 rounded-xl bg-slate-800">
                    <HistoricalChartComponent 
                        labels={ precios.map(item => item.anio) } 
                        precios={ precios.map(item => item.precio) }
                        name={ producto.length > 0 ? producto[0].nombre : "No disponible" }
                    ></HistoricalChartComponent>
                </div>
            </section>
        </MainLayout>
    );
}
