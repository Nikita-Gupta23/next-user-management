"use client"; // Ensures this runs only on the client side

import { useEffect, useRef } from "react";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";

interface BarChartProps {
    data: ChartData<"bar">;
    options?: ChartOptions<"bar">;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"bar"> | null>(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Destroy previous chart instance
        }

        if (chartRef.current) {
            chartInstance.current = new Chart(chartRef.current, {
                type: "bar",
                data,
                options: options || {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { beginAtZero: true },
                    },
                },
            });
        }

        return () => {
            chartInstance.current?.destroy();
        };
    }, [data, options]);

    return <canvas ref={chartRef} />;
};

export default BarChart;
