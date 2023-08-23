import { Card } from "react-bootstrap";
import { styled } from "styled-components";

interface TopCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  active?: boolean;
}

export default function TopCard({
  title,
  value,
  icon,
  active = false,
}: TopCardProps) {
  return (
    <CustomCard className={`${active ? 'active' : ''}`}>
      {icon}
      <div>
        <div className="fw-bold text-white" >{title}</div>
        <div
          style={{
            fontSize: ".875rem",
            fontWeight: active ? "700" : "500",
            color: active ? "white" : "#6c757d",
          }}
        >
          {value}
        </div>
      </div>
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap:1.25rem;
  padding: 1.375rem 1.25rem;
  &.active{
    background-color: var(--bs-primary);
  }
`;
