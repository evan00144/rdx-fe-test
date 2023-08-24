import { Card } from "react-bootstrap";
import Echart from "./Echart";

export default function Profit() {
  const data = [0, 2, 1, 3, 2, 4];

  const seriesData = data.map(function (value, index) {
    return {
      value: value,
      symbol: index === data.length - 1 ? "circle" : "emptyCircle",
      symbolSize: index === data.length - 1 ? 10 : 0,
      lineStyle: {
        color: "#FF814A",
      },
      color: "#0BB885", 
    };
  });

  const markLineData = data.map(function (_value, index) {
    return {
      xAxis: index,
    };
  });
  return (
    <Card>
      <p
        className="mb-2"
        style={{
          fontSize: "1.0375rem",
        }}
      >
        Profit
      </p>
      <h3
        className="text-primary "
        style={{
          marginBottom: "auto",
        }}
      >
        8,24k{" "}
      </h3>
      <Echart
        id="profit"
        height={100}
        opt={{
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            show: false,
          },
          yAxis: {
            type: "value",
            max: 4,
            show: false,
          },
          grid: {
            top: 20,
            bottom: 0,
            left: 0,
            right: 0,
          },
          series: [
            {
              data: seriesData,
              type: "line",
              lineStyle: {
                color: "#0BB885", 
                width: 4,
              },
z: 100,
              itemStyle: {
                color: "#0BB885", 
              },
              markLine: {
                symbol: "none",
                silent: true,
                zlevel: 0,
                lineStyle: {
                  type: "dashed",
                  color: "#0A1826",
                width: 2,
              },
                // hide label
                label: {
                  show: false,
                },
                data: markLineData,
              },
            },
          ],
        }}
      />
    </Card>
  );
}
