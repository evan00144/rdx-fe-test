import { Button, Card, Dropdown } from "react-bootstrap";
import { styled } from "styled-components";
import Echart from "./Echart";
import ChevronDownGreenIcon from "../icons/ChevronDownGreenIcon";

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
        <Echart
          id="totalProfit"
          height={250}
          opt={{
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            grid: {
              left: "0%",
              right: "0%",
              bottom: "5%",
              top: "5%",
              containLabel: true,
            },
            yAxis: [
              {
                type: "value",
                max: 300,
                min: -200,
                splitLine: {
                  show: false,
                },
              },
            ],
            xAxis: [
              {
                offset: 10, // Offset to start above zero
                type: "category",
                axisTick: {
                  show: false,
                },
                axisLine: {
                  show: false,
                },
                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                ],
              },
            ],
            series: [
              {
                name: "Positive",
                type: "bar",
                stack: "Total",
                z: 2,
                color: "transparent",
                itemStyle: {},
                emphasis: {
                  focus: "series",
                },
                data: [20, 20, 20, 20, 20, 20, 20, 20, 20],
              },
              {
                name: "Income",
                type: "bar",
                stack: "Total",
                itemStyle: {
                  borderRadius: [100, 100, 0, 0],
                },
                emphasis: {
                  focus: "series",
                },
                color: "#0BB885 ",
                data: [120, 250, 300, 270, 120, 450, 80, 200, 230],
                barCategoryGap: "80%", // Add gap between different categories
              },

              {
                name: "Negative",
                type: "bar",
                stack: "Total",
                z: 2,
                color: "transparent",
                itemStyle: {},
                emphasis: {
                  focus: "series",
                },
                data: [-20, -20, -20, -20, -20, -20, -20, -20, -20],
              },
              {
                name: "Expenses",
                type: "bar",
                stack: "Total",
                itemStyle: {
                  borderRadius: [0, 0, 100, 100],
                },
                color: "#FF814A",
                emphasis: {
                  focus: "series",
                },
                data: [-180, -80, -50, -200, -150, -100, -120, -110, -130], // Monthly data for Expenses
              },
            ],
          }}
        />
      </LeftSide>
      <RightSide>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              color: "#0bb885",
              fontSize: " 0.67rem",
              cursor: "pointer",
              borderRadius: " 0.25rem",
              border: "1px solid #0bb885",
              padding: "0.335rem 0.781875rem",
              display: "flex",
              alignItems: " center",
              gap: "0.5rem",
              marginBottom:"3.725rem"
            }}
            as={"div"}
          >
            2023
            <ChevronDownGreenIcon />
          </Dropdown.Toggle>
          <CustomDropdownMenu>
            <CustomDropdownItem>2023</CustomDropdownItem>
            <CustomDropdownItem>2024</CustomDropdownItem>
          </CustomDropdownMenu>
        </Dropdown>
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

        <div className="px-4 w-100">
          <Echart
            id={"totalProfit2"}
            height={45}
            width={"100%"}
            opt={{
              xAxis: {
                type: "category",
                show: false,

                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "oct",
                  "nov",
                  "dec",
                ],
              },
              yAxis: {
                type: "value",
                max: 100,
                show: false,
              },
              grid: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
              series: [
                {
                  symbol: "none",
                  data: [50, 40, 25, 60, 30, 45, 0, 100, 45, 40, 15, 55],
                  type: "line",
                  smooth: true,
                  lineStyle: {
                    width: 2,
                    color: "#0BB885",
                  },
                },
              ],
            }}
          />
        </div>
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
  font-size: 0.75rem;
`;

const CustomDropdownItem = styled(Dropdown.Item)`
  padding: 0.625rem;
  font-size: 0.875rem;
  color: white !important;
  line-height: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
  }
`;

const CustomDropdownMenu = styled(Dropdown.Menu)`
  padding: 0;
  overflow: hidden;
  background: #2e4b85;
  min-width: 129px;
  &::after {
    content: "";
    position: absolute;
    top: 9px;
    right: 9px;
    width: 6.45px;
    height: 15px;
    border-radius: 30rem;
    background: #1c243f;
  }
`;
