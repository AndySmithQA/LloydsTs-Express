import Chart, { ChartData } from "chart.js/auto";
import {CategoryScale} from "chart.js";
import useFetch from "../hooks/useFetch";
import LineChart from "./LineChart";
import { useState } from "react";

Chart.register(CategoryScale);

export default function ShowGraph(){
    const [chartData, setChartData] = useState<ChartData<'line'>>({
        labels: [],
        datasets: [],
    });

    const initChartData = (data: { date: string; closing: number }[]) => {

        setChartData({
            labels: data.map((prices) => prices.date),
            datasets: [
                {
                    label: "Historical closing values",
                    yAxisID: 'times',
                    data: data.map((prices) => prices.closing),
                    backgroundColor: [
                        "rgba(75,192,192,1)"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                }
            ]
        });
    };

    useFetch("http://localhost:3001", initChartData);

    return (
        <div className="App">
            {chartData && <LineChart chartData={chartData}/>}
        </div>
    );
}