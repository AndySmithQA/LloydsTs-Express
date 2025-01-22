import { Line } from "react-chartjs-2";
import { ChartData, Point, BubbleDataPoint } from "chart.js";

interface LineChartProps {
  chartData: ChartData<"line", (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>;
}

function LineChart({ chartData }: LineChartProps) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>5K times</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
        
            legend: {
              display: true
            }
          },
          scales: {
            times:{
              type: 'linear',
              position: "left",
              title: {
                display: true,
                text: "Closing Share Price"
              }
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;
