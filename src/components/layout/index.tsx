import React, { ReactNode } from "react";
import { Container, Header, Logo, Title, Content } from "./styled-components";
import logo from "../../assets/logo.svg";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
