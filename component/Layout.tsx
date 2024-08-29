"use client";
import {
  AppShell,
  Burger,
  Container,
  Divider,
  Group,
  Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MenuBar from "./MenuBar";
import TopSearchBar from "./TopSearhBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 90 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Container mx="auto">
          <TopSearchBar />
        </Container>
        <Divider size={"xs"} pb="xs" />
        <Container mx="auto">
          <MenuBar />
        </Container>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
