import { Card } from "react-bootstrap";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import { styled } from "styled-components";

export default function ActivityOverview() {
  const activity = [
    {
      content: (
        <>
          <strong>Nick Mark</strong> Mentioned <strong>Sara Smith</strong> In
          New Post
        </>
      ),
      time: "11 JUL 8:10 PM",
    },
    {
      content: (
        <>
          The <strong>Post Name</strong> was removed by{" "}
          <strong>Nick Mark</strong>
        </>
      ),
      time: "11 JUL 9:10 PM",
    },
    {
      content: (
        <>
          <strong>Patrick Sulivan</strong> Published a New Post
        </>
      ),
      time: "12 JUL 10:10 PM",
    },
    {
      content: (
        <>
          <strong>240+ users</strong> have subscribed to Newsletter #1
        </>
      ),
      time: "18 JUL 19:10 PM",
    },
    {
      content: (
        <>
          The <strong>Post Name</strong> was suspanded by{" "}
          <strong>Nick Mark</strong>
        </>
      ),
      time: "11 JUL 9:10 PM",
    },
  ];
  return (
    <Card
      style={{
        padding: "1.5rem",
      }}
    >
      <h4
        style={{
          fontSize: "1.25rem",
          color: "#D3D3D3",
        }}
        className="mb-2"
      >
        Activity overview
      </h4>
      <div
        className="d-flex"
        style={{
          marginBottom: "1.5rem",
        }}
      >
        <ArrowUpIcon />
        <div className="ms-2 fw-light">16% this month</div>
      </div>
      {activity.map((item, index) => (
        <Item key={index}>
          <ItemBullet>
            <Circle />
            <Line />
          </ItemBullet>
          <div className="mb-5">
            <Content>{item?.content}</Content>
            <Time>{item?.time}</Time>
          </div>
        </Item>
      ))}
    </Card>
  );
}

const Circle = styled.div`
  width: 1.3125rem;
  border-radius: 50%;
  height: 1.3125rem;
  border: 2px solid var(--bs-secondary);
`;
const Line = styled.div`
  width: 1px;
  flex: 1;
  background-color: #5c6ca5;
`;

const Item = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #1f2849;
    border-radius: 0 0.625rem 0.625rem 0;
  }
`;
const ItemBullet = styled.div`
  // d-flex flex-column align-items-center justify-content-center
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Time = styled.div`
  color: #9f9f9f;
  font-size: 0.75rem;
`;

const Content = styled.div`
  font-size: 0.875rem;
  color: #d3d3d3;
`;
