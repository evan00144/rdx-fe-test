import { Container } from "react-bootstrap";
import { styled } from "styled-components";
import BurgerIcon from "../icons/BurgerIcon";

interface iHeader {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Header({ isOpen, setIsOpen }: iHeader) {
  return (
    <div
      style={{
        borderBottom: "1px solid #4B5259",
      }}
    >
      <Container
        fluid
        style={{
          padding: "0.4rem 2rem",
        }}
      >
        <div className="d-flex align-items-center ">
          <ToggleSidebar onClick={() => setIsOpen(!isOpen)}>
            <BurgerIcon />
          </ToggleSidebar>
          <Profile>
            <CircleImage />
            <span
              style={{
                fontSize: ".875rem",
              }}
            >
              Hello, User!
            </span>
          </Profile>
        </div>
      </Container>
    </div>
  );
}

const CircleImage = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: #b5b4b4;
  border: 1px solid white;
  position: relative;
  // circle dot
  &::after {
    content: "";
    position: absolute;
    top: 5px;
    right: -2px;
    width: 6.63px;
    height: 6.63px;
    border-radius: 50%;
    background-color: #5ccc5a;
  }
`;

const ToggleSidebar = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.625rem;
  margin-left: auto;
  cursor: pointer;
  padding: 0.35rem 1rem;
  &:hover {
    background-color: #1f2849;
  }
`;
