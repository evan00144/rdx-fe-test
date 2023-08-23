import { Card } from "react-bootstrap";
import OrderChart from "../charts/OrderChart";

export default function Orders() {
  return (
    <Card>
      <p className="mb-2" style={{
        fontSize:'1.0375rem',
      }}>Order</p>
      <h3
        className="text-secondary"
        style={{
          marginBottom: "auto",
        }}
      >
        189k
      </h3>
      <OrderChart />
    </Card>
  );
}
