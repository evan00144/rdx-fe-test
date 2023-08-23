import { Button, Card, Form } from "react-bootstrap";
import { styled } from "styled-components";
import TotalProfitChart from "../charts/TotalProfitChart";
import TotalProfitChart2 from "../charts/TotalProfitChart2";

export default function TotalProfit() {
  return (
    <Card className="p-0 flex-row">
      <LeftSide>
        <div className="d-flex mb-4 justify-content-between align-items-center">
          <div
            className="fw-bold me-auto"
            style={{
              fontSize: "0.9375rem",
            }}
          >
            Total Profit
          </div>
          <div className="me-4">
            <Circle color="var(--bs-primary)" />
            <LegendText>Earning</LegendText>
          </div>
          <div>
            <Circle color="var(--bs-secondary)" />
            <LegendText>Expense</LegendText>
          </div>
        </div>
        <TotalProfitChart />
      </LeftSide>
      <RightSide>
        <Form.Select
          style={{
            marginBottom: "3.6875rem",
            fontSize: "10px",
          }}
        >
          <option>2023</option>
        </Form.Select>
        <h3
          style={{
            fontSize: "1.9375rem",
          }}
        >
          $842.98
        </h3>
        <span
          style={{
            color: "#828282",
            fontSize: "0.5625rem",
            marginBottom: "2.375rem",
          }}
        >
          Latest Month Balance $426.20k
        </span>
        <TotalProfitChart2 />
        <Button
          className="fw-bold mt-auto"
          style={{
            color: "white",
          }}
        >
          View Report
        </Button>
      </RightSide>
    </Card>
  );
}

const ContentPadding = styled.div`
  padding: 1.5rem 1.125rem;
`;

const LeftSide = styled(ContentPadding)`
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #2e4b85;
`;

const RightSide = styled(ContentPadding)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
`;

const Circle = styled.span`
  width: 10px;
  display: inline-block;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 0.5rem;
`;

const LegendText = styled.span`
  color: #828282;
  font-size: 0.8rem;
`;
