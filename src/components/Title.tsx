import { Breadcrumb } from "react-bootstrap";

export default function Title() {
  return (
    <div
      style={{
        paddingBottom: "2rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.875rem",
          letterSpacing: "1px",
          marginBottom: "0.625rem",
        }}
      >
        Marketing Dashboard
      </h3>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
