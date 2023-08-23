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

export default function HomePage() {
  const topCardData = [
    {
      title: "Total Cost",
      value: "$31.868",
      icon: <TotalCostIcon />,
      active: true,
    },
    {
      title: "Total Sales",
      value: "$66,053",
      icon: <TrophyIcon />,
    },
    {
      title: "This Week",
      value: "$35,000,00",
      icon: <CalendarIcon />,
    },
    {
      title: "Revenue",
      value: "$63,00K",
      icon: <ChartIcon width={32} />,
    },
    {
      title: "$1250",
      value: "Last payment",
      icon: <WalletIcon />,
    },
  ];
  return (
    <>
      <Sidebar />
      <ContentContainer>
        <Header />
        <Container
          style={{
            padding: "2.8125rem 2rem",
          }}
        >
          <Title />
          <GridContainer>
            {topCardData.map((item, index) => (
              <div key={index}>
                <TopCard
                  title={item?.title}
                  value={item?.value}
                  icon={item?.icon}
                  active={item?.active}
                />
              </div>
            ))}
            <GridItemLeft>
              <Earning />
              <Orders />
              <Profit />
              <div
                style={{
                  gridRow: 2,
                  gridColumn: "1/4",
                }}
              >
                <TotalProfit />
              </div>
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

const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 2fr);
  width: 100%;
  gap: 1.5rem;
`;

const GridItemLeft = styled.div`
  grid-row: 2;
  grid-column: 1 / 4;
  position: relative;
  display: inline-grid;
  gap: 1.067rem;
  grid-template-columns: 42% 27.5% 1fr;
  // grid-template-area: "earning order profit"
  //                     "total;
  // width: 100%;
  // grid-template-columns: "1fr 1fr 1fr"
  //                         "1fr;
`;

const GridItemRight = styled.div`
  grid-row: 2;
  grid-column: 4 / 6;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15.625rem;
`;
