import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { styled } from "styled-components";
import { Container } from "react-bootstrap";
import Title from "../components/Title";
import TopCard from "../components/TopCard";
import WalletIcon from "../icons/WalletIcon";
import ChartIcon from "../icons/ChartIcon";
import CalendarIcon from "../icons/CalendarIcon";
import TrophyIcon from "../icons/TrophyIcon";
import TotalCostIcon from "../icons/TotalCostIcon";
import ActivityOverview from "../components/ActivityOverview";
import Earning from "../components/Earning";
import Orders from "../components/Orders";
import Profit from "../components/Profit";
import TotalProfit from "../components/TotalProfit";
import Footer from "../components/Footer";
import React, { useState } from "react";

export default function HomePage() {
  const topCardData = [
    {
      title: "Total Cost",
      value: "$31.868",
      icon: <TotalCostIcon />,
      grid: {
        "1220": {
          column: "1/4",
          row: "1",
        },
        "896": {
          column: "1/5",
          row: "1",
        },
        "700": {
          column: "1/2",
          row: "1",
        },
      },
      active: true,
    },
    {
      title: "Total Sales",
      value: "$66,053",
      icon: <TrophyIcon />,
      grid: {
        "1220": {
          column: "4/7",
          row: "1",
        },
        "896": {
          column: "1/3",
          row: "2",
        },
        "700": {
          column: "1/2",
          row: "2",
        },
      },
    },
    {
      title: "This Week",
      value: "$35,000,00",
      icon: <CalendarIcon />,
      grid: {
        "1220": {
          column: "1/3",
          row: "2",
        },
        "896": {
          column: "3/5",
          row: "2",
        },
        "700": {
          column: "1/2",
          row: "3",
        },
      },
    },
    {
      title: "Revenue",
      value: "$63,00K",
      icon: <ChartIcon width={32} />,
      grid: {
        "1220": {
          column: "3/5",
          row: "2",
        },
        "896": {
          column: "1/3",
          row: "3",
        },
        "700": {
          column: "1/2",
          row: "4",
        },
      },
    },
    {
      title: "$1250",
      value: "Last payment",
      icon: <WalletIcon />,
      grid: {
        "1220": {
          column: "5/7",
          row: "2",
        },
        "896": {
          column: "3/5",
          row: "3",
        },
        "700": {
          column: "1/2",
          row: "5",
        },
      },
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} />
      <ContentContainer>
        <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <Container
          fluid
          style={{
            padding: "2.8125rem 2rem",
          }}
        >
          <Title />
          <GridContainer>
            {topCardData.map((item, index) => (
              <React.Fragment key={index}>
                <TopCard
                  grid={item?.grid}
                  title={item?.title}
                  value={item?.value}
                  icon={item?.icon}
                  active={item?.active}
                />
              </React.Fragment>
            ))}
            <GridItemLeft>
              <EarningContainer>
                <Earning />
              </EarningContainer>
              <OrdersContainer>
                <Orders />
              </OrdersContainer>
              <ProfitContainer>
                <Profit />
              </ProfitContainer>
              <TotalProfitContainer>
                <TotalProfit />
              </TotalProfitContainer>
            </GridItemLeft>
            <GridItemRight>
              <ActivityOverview />
            </GridItemRight>
          </GridContainer>
          <Footer />
        </Container>
      </ContentContainer>
    </>
  );
}

const EarningContainer = styled.div`
  @media (max-width: 1439px) {
    grid-row: 1;
    grid-column: 1 / 3;
  }

  @media (max-width: 700px) {
    grid-row: 1;
    grid-column: 1 / 3;

`;

const OrdersContainer = styled.div`
  @media (max-width: 1439px) {
    grid-row: 2;
  }
  @media (max-width: 700px) {
    grid-column: 1 / 2;
    grid-row: 2;
  }
`;

const ProfitContainer = styled.div`
  @media (max-width: 1439px) {
    grid-row: 2;
  }

  @media (max-width: 700px) {
    grid-column: 2/3;
    grid-row: 2;
`;

const TotalProfitContainer = styled.div`
  grid-row: 2;
  grid-column: 1 / 4;
  @media (max-width: 1439px) {
    grid-row: 3;
    grid-column: 1 / 3;
  }
  @media (max-width: 700px) {
    grid-column: 1 / 3;
    grid-row: 3;
`;

const GridItemLeft = styled.div`
  grid-row: 2;
  grid-column: 1 / 4;
  position: relative;
  display: inline-grid;
  gap: 1.067rem;
  grid-template-columns: 42% 27.5% 1fr;
  @media (max-width: 1439px) {
    grid-template-rows: 3fr;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1220px) {
    grid-row: 3;
    gap: 23px;
    grid-column: 1 / 7;
  }

  @media (max-width: 896px) {
    grid-row: 4;
    grid-column: 1 / 5;
  }

  @media (max-width: 700px) {
    grid-column: 1 / 2;
    grid-row: 6;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3fr;
  }
`;
const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 1.5rem;
  @media (max-width: 1220px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 4fr;
  }

  @media (max-width: 896px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 6fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 7fr;
  }
`;
const GridItemRight = styled.div`
  grid-row: 2;
  grid-column: 4 / 6;

  @media (max-width: 1220px) {
    grid-row: 4;
    grid-column: 1 / 7;
  }

  @media (max-width: 896px) {
    grid-row: 5;
    grid-column: 1 / 5;
  }

  @media (max-width: 700px) {
    grid-row: 7;
    grid-column: 1 / 2;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15.625rem;

  @media (max-width: 700px) {
    padding-left: 0;
  }
`;
