import { Outlet } from "react-router-dom";

import { Container, Flex } from "@radix-ui/themes";

import { Header } from "../components/header";

export const Layout = () => {
  return (
    <Container size="2">
      <Flex direction="column" gap="6">
        <Header />
        <Flex direction="column" gap="4">
          <Outlet />
        </Flex>
      </Flex>
    </Container>
  );
};
