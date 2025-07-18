"use client";
import BarChart from "./BarChart";
import { useState } from "react";
import { ChartData } from "chart.js";
import "../bar-style.scss"
export default function ChartFunx() {
    const [chartData, setChartData] = useState<ChartData<"bar">>({
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    });

    const addData = (e: any) => {
        //if (!newLabel || isNaN(Number(newValue))) return; // Validate input
        e.preventDefault();
        setChartData((prevData: any) => ({
            labels: [...prevData.labels, newLabel], // Add new label
            datasets: [
                {
                    ...prevData.datasets[0],
                    data: [...prevData.datasets[0].data, Number(newValue)], // Add new value
                },
            ],
        }));

        setNewLabel("");
        setNewValue("");

    }

    const [newValue, setNewValue] = useState('');
    const [newLabel, setNewLabel] = useState('');


    return (
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="main-page">
            {/* <h1>Home Page</h1> */}
            {/* <Image src='/assests/logo-design-t.jpg' alt='' height={1000} width={1000}></Image> */}
            <div className="input-container">
                <div className="input-box">
                    <label htmlFor="value">Enter a field value to add to the current bar chart</label>
                    <input type="number" placeholder="Enter a value" name="value" id="value" value={newValue} onChange={(e: any) => { setNewValue(e.target.value) }}></input>
                </div>
                <div className="input-box">
                    <label htmlFor="label">Enter the corresponding label</label>
                    <input type="text" placeholder="Enter a label" name="label" id="label" value={newLabel} onChange={(e: any) => { setNewLabel(e.target.value) }}></input>
                </div>
            </div>
            <button className="change-btn" onClick={addData}>Add Bar</button>
            <div className="chart-container">
                <BarChart data={chartData} />
            </div>
        </div>
    );
}