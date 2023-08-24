import { Card, Col, Dropdown, Row } from "react-bootstrap";
// import Earnings1Chart from "../charts/Earnings1Chart";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Echart from "./Echart";

export default function Earning() {
  const [selected, setSelected] = useState("Last Week");
  const selectItem = ["Last Week", "Two Week", "Last Month"];

  return (
    <Card>
      <div className="d-flex mb-auto justify-content-between">
        <div
          className="fw-bold"
          style={{
            fontSize: "0.9375rem",
          }}
        >
          Earnings
        </div>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              color: "#5C6CA5",
              fontSize: ".625rem",
              cursor: "pointer",
            }}
            as={"div"}
          >
            {selected === "Last Week" ? " This Week" : selected}
            <ChevronDownIcon />
          </Dropdown.Toggle>

          <CustomDropdownMenu>
            {selectItem.map((item, index) => (
              <CustomDropdownItem onClick={() => setSelected(item)} key={index}>
                {item}
              </CustomDropdownItem>
            ))}
          </CustomDropdownMenu>
        </Dropdown>
      </div>
      <Row className="g-0">
        <Col sm="7">
          {/* <Earnings1Chart /> */}
          {selected === "Last Week" && <Echart height={128} />}
          {selected !== "Last Week" && (
            <Echart
              id={"earning2"}
              opt={{
                angleAxis: {
                  show: false,
                  max: 10,
                },
                radiusAxis: {
                  show: false,
                  data: ["", ""],
                },
                polar: {
                  radius: [35, "100%"],
                },

                grid: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  containLabel: true, // Ensure labels are within the chart area
                },
                series: [
                  {
                    type: "bar",
                    data: [
                      { value: 5, name: "Search Engine" },
                      { value: 5, name: "Direct" },
                    ],
                    colorBy: "data",
                    name: "data1",
                    barWidth: 10,
                    showBackground: true,
                    barCategoryGap: "120%", // Add gap between different categories

                    backgroundStyle: {
                      color: "#1F2849",
                    },
                    color: ["#FF814A", "#0BB885"],
                    roundCap: true,
                    label: {
                      show: false,
                      position: "start",
                      formatter: "{a}",
                    },
                    coordinateSystem: "polar",
                  },
                ],
                responsive: true, // Enable responsiveness
              }}
              height={128}
            />
          )}
        </Col>
        {selected === "Last Week" && (
          <Col sm="5">
            <div className="d-flex h-100 ms-1 justify-content-center gap-4 flex-column">
              <Legend>
                <CircleLegend color="#0bb885" />
                <div>
                  <div className="name">Total Sales</div>
                  <div className="value">251K</div>
                </div>
              </Legend>
              <Legend>
                <CircleLegend color="#FF814A" />
                <div>
                  <div className="name">Total Orders</div>
                  <div className="value">176K</div>
                </div>
              </Legend>
            </div>
          </Col>
        )}
        {selected !== "Last Week" && (
          <Col sm="5">
            <div className="d-flex h-100 ms-1 justify-content-center gap-4 flex-column">
              <Legend>
                <CircleLegend color="#0bb885" />
                <div>
                  <div className="name">Total Sales</div>
                  <div className="value">251K</div>
                </div>
              </Legend>
              <Legend>
                <CircleLegend color="#FF814A" />
                <div>
                  <div className="name">Total Orders</div>
                  <div className="value">147K</div>
                </div>
              </Legend>
            </div>
          </Col>
        )}
      </Row>
      {/* {selected === "Last Week" ? <Earnings1Chart /> : <Earnings2Chart />} */}
    </Card>
  );
}

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
const animationKey = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const Legend = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  .name {
    font-size: 0.75rem;
  }
  .value {
    font-size: 0.875rem;
    color: #8a92a6;
    animation: ${animationKey} 0.3s;
  }
`;

const CircleLegend = styled.div`
  width: 8.13px;
  height: 8.13px;
  border-radius: 50%;
  display: inline-block;
  background: ${(props) => props?.color};
`;
