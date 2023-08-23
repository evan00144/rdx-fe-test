import { Card } from "react-bootstrap";
import ProfitChart from "../charts/ProfitChart";

export default function Profit() {
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
        className="text-primary"
        style={{
          marginBottom: "auto",
        }}
      >
        8,24k{" "}
      </h3>
      <ProfitChart />
    </Card>
  );
}
