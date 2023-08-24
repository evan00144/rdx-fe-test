import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { styled } from "styled-components";

interface TopCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  active?: boolean;
  grid?: IGrid;
}

interface IGrid {
  "1220": gridProps;
  "1000": gridProps;
}

interface gridProps {
  column: string;
  row: string;
}

export default function TopCard({
  title,
  value,
  icon,
  active = false,
  grid = {
    "1220": {
      column: "1/3",
      row: "1",
    },
    "1000": {
      column: "1/3",
      row: "1",
    },
  },
}: TopCardProps) {
  const createMedia = (grid: IGrid) => {
    const arrayMedia = Object.entries(grid).map((item) => {
      return `@media (max-width: ${item[0]}px) {
        grid-column: ${item[1].column};
        grid-row: ${item[1].row};
      };`;
    });
    console.log(arrayMedia);
    return arrayMedia.join("");
  };

  useEffect(() => {
    createMedia(grid);
  }, [grid]);

  const CustomCard = styled(Card)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1.25rem;
    padding: 1.375rem 1.25rem;
    &.active {
      background-color: var(--bs-primary);
    }
    // @media (max-width: 1220px) {
    //   grid-column: ${(props) => props?.column};
    //   grid-row: ${(props) => props?.row};
    // }
    ${createMedia(grid)}
  `;

  return (
    <CustomCard className={`${active ? "active" : ""}`}>
      {icon}
      <div>
        <div className="fw-bold text-white">{title}</div>
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
