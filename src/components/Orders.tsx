import { Card } from "react-bootstrap";
import Echart from "./Echart";

export default function Orders() {
  return (
    <Card>
      <p
        className="mb-2"
        style={{
          fontSize: "1.0375rem",
        }}
      >
        Order
      </p>
      <h3
        className="text-secondary"
        style={{
          marginBottom: "auto",
        }}
      >
        189k
      </h3>
      {/* <OrderChart /> */}
      <Echart
      id='order'
      height={80}
        opt={{
          xAxis: {
            type: "category",
            show: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          },
          yAxis: {
            type: "value",
            show: false,
            max: 100,
          },
          grid:{
            top:0,
            bottom:0,
            left:0,
            right:0
          },
          series: [
            {
              data: [25, 80, 50, 25, 60],
              type: "bar",
              barGap: 20,

              barCategoryGap: 25,
              showBackground: true,
              color: "#FF814A",
              roundCap: true,
              backgroundStyle: {
                color: "#2E4B85",
                borderRadius: 100,
              },
              itemStyle: {
                borderRadius: [0, 0, 100, 100],
              },
            },
          ],
        }}
      />
    </Card>
  );
}
