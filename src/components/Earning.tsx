import { Card, Dropdown } from "react-bootstrap";
// import Earnings1Chart from "../charts/Earnings1Chart";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Earnings2Chart from "../charts/Earnings2Chart";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

export default function Earning() {
  const [selected, setSelected] = useState("Last Week");
  const selectItem = ["Last Week", "Two Week", "Last Month"];

  useEffect(() => {
    const dom = document.getElementById("chartEarning") as HTMLDivElement;
    const myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });

    const option: echarts.EChartsOption = {
      angleAxis: {
        show: false,
        max: 10,
      },
      radiusAxis: {
        show: false,
        data: ["", ""],
      },
      polar: {
        radius: [80, "100%"],
      },
      legend: {
        show: true,
        orient: "vertical",
        top: "center",
        right: "25%",
        data: ["data1", "data2"],
        itemWidth: 10,
        itemHeight: 10,
      },
      series: [
        {
          type: "bar",
          data: [{ value: 7, name: "Search Engine" }],
          barWidth: 15,
          barGap: 1,
          colorBy: "data",
          name: "data1",
          showBackground: true,
          backgroundStyle: {
            color: "#1F2849",
          },
          color: "#FF814A",
          roundCap: true,
          label: {
            show: false,
            position: "start",
            formatter: "{a}",
          },
          coordinateSystem: "polar",
        },
        {
          type: "bar",
          data: [{ value: 8, name: "Direct" }],
          barWidth: 15,
          color: "#0BB885",
          colorBy: "data",
          name: "data2",
          showBackground: true,
          roundCap: true,
          backgroundStyle: {
            color: "#1F2849",
          },
          label: {
            show: false,
            position: "start",
            formatter: "{a}",
          },
          coordinateSystem: "polar",
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", myChart.resize);
    };
  }, []);

  return (
    <Card>
      <div className="d-flex mb-3 justify-content-between">
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
      <div className="position-relative">
        <div
          className={`chart position-absolute bottom-0 w-100 ${
            selected == "Last Week" ? "fadeIn" : "fadeOut"
          }`}
        >
          {/* <Earnings1Chart /> */}
          <div
            style={{
              height: "300px",
            }}
          >
            <div
              id="chartEarning"
              style={{ width: "100%", height: "100%" }}
            ></div>
            {/* <ReactECharts
              style={{
                height: "100%",
                width: "100%",
              }}
              option={{
                angleAxis: {
                  show: false,
                  max: 10,
                },
                radiusAxis: {
                  show: false,
                  data: ["", ""],
                },
                polar: {
                  radius: [50, "40%"],
                },
                legend: {
                  show: true,
                  orient: "vertical",
                  top: "center",
                  transform: "translateY(-50%)",
                  right: "25%",
                  data: ["data1", "data2"],
                  itemWidth: 10, // Adjust the width of the legend items
                  itemHeight: 10, // Adjust the height of the legend items
                },
                series: [
                  {
                    type: "bar",
                    data: [{ value: 7, name: "Search Engine" }],
                    // barCategoryGap: '45%',
                    barWidth: 15,
                    barGap: 1,
                    colorBy: "data",
                    name: "data1",
                    showBackground: true,
                    backgroundStyle: {
                      color: "#1F2849",
                    },
                    color: "#FF814A",
                    roundCap: true,
                    label: {
                      show: false,
                      position: "start",
                      formatter: "{a}",
                    },
                    coordinateSystem: "polar",
                  },
                  {
                    type: "bar",
                    data: [{ value: 8, name: "Direct" }],
                    // barCategoryGap: '45%',
                    barWidth: 15,
                    color: "#0BB885",
                    colorBy: "data",
                    name: "data2",
                    showBackground: true,
                    roundCap: true,
                    backgroundStyle: {
                      color: "#1F2849",
                    },
                    label: {
                      show: false,
                      position: "start",
                      formatter: "{a}",
                    },
                    coordinateSystem: "polar",
                  },
                ],
              }}
            /> */}
          </div>
        </div>
        <div
          className={`chart  ${
            selected == "Two Week" || selected == "Last Month"
              ? "fadeIn"
              : "fadeOut"
          }`}
        >
          <div
            style={{
              height: "300px",
            }}
          >
            <div
              id="chartEarning"
              style={{ width: "100%", height: "100%" }}
            ></div>
           
          </div>{" "}
        </div>
      </div>
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
