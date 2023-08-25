import Image from "react-bootstrap/Image";
import { styled } from "styled-components";
import HomeIcon from "../icons/HomeIcon";
import ChartIcon from "../icons/ChartIcon";
import BellIcon from "../icons/BellIcon";
import GearIcon from "../icons/GearIcon";
import LogoutIcon from "../icons/LogoutIcon";
import { NavLink } from "react-router-dom";

interface iSidebar {
  isOpen: boolean;
}
export default function Sidebar({ isOpen }: iSidebar) {
  interface Menu {
    icon: JSX.Element;
    title: string;
    link?: string;
    count?: number;
  }

  const menu: Menu[] = [
    {
      icon: <HomeIcon />,
      title: "Home",
      link: "/home",
    },
    {
      icon: <ChartIcon />,
      title: "Reports",
      link: "/reports",
    },
    {
      icon: <BellIcon />,
      title: "Notifications",
      link: "/notifications",
      count: 1,
    },
    {
      icon: <GearIcon />,
      title: "Settings",
      link: "/settings",
    },
    {
      icon: <LogoutIcon />,
      title: "Log out",
      link: "/logout",
    },
  ];

  const SidebarContainer = styled.div`
    background-color: var(--bs-sidebar);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    min-height: 100vh;
    padding: 1.25rem;
    z-index: 1000;
    color: #6c747d;
    @media (max-width: 700px) {
      display: ${isOpen ? "block" : "none"};
      width: 100%;
      top: 60px;

    }
  `;

  return (
    <SidebarContainer>
      <Image
        src="/logo.svg"
        alt="logo"
        style={{
          paddingBottom: "3.875rem",
        }}
      />
      <div className="d-flex flex-column gap-2">
        {menu.map((item, index) => (
          <SidebarItem to={`${item?.link}`} key={index}>
            {item.icon}
            {item.title}
            <div
              style={{
                backgroundColor: "#98FFE0",
                marginLeft: "auto",
                padding: "0 0.4rem",
                lineHeight: "1.5",
                fontSize: "0.75rem",
                color: "var(--bs-bg)",
                borderRadius: "4px",
              }}
            >
              {item.count}
            </div>
          </SidebarItem>
        ))}
      </div>
    </SidebarContainer>
  );
}

const SidebarItem = styled(NavLink)`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 0.8rem 0.8rem;
  line-height: 24px;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #1f2849;
  }

  &.active {
    background-color: #1f2849;
  }
`;
