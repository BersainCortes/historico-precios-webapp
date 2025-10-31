import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

type HistoricalChartProps = {
    name: string;
    labels: number[]; // años
    precios: number[]; // precios
};

export default function HistoricalChartComponent({ name, labels, precios }: HistoricalChartProps) {
    const chartData = {
        labels,
        datasets: [
            {
                label: `Precio histórico de ${name}`,
                data: precios,
                borderColor: "#36a2eb",
                backgroundColor: "rgba(54,162,235,0.2)",
                tension: 0.3,
                fill: true,
                pointRadius: 9,
                pointHoverRadius: 12,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" as const },
            title: { display: true, text: "Evolución del precio por año" },
        },
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };

    return <Line  style={{ width: "100%" }} data={chartData} options={options} />;
}
