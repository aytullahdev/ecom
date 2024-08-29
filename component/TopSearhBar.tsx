import {
  ActionIcon,
  Box,
  Divider,
  Flex,
  Group,
  Input,
  Select,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const TopSearchBar = () => {
  const SearchSection = () => {
    return (
      <ActionIcon
        bg={"transparent"}
        style={{
          cursor: "pointer",
          outlineColor: "transparent",
          boxShadow: "none",
        }}
      >
        <IconSearch color="black" />
      </ActionIcon>
    );
  };

  return (
    <Flex justify={"space-between"} align={"center"} py="xs">
      <Box>Logo</Box>
      <Group gap={"xs"}>
        <Select
          defaultValue={"catalog"}
          style={{
            width: "120px",
          }}
          data={[
            {
              value: "catalog",
              label: "Catalog",
            },
            {
              value: "member",
              label: "Member",
            },
          ]}
        />
        <Divider orientation="vertical" size={"xs"} />
        <Input
          placeholder="Search you product"
          rightSection={<SearchSection />}
          style={{}}
        />
      </Group>
      <Box>
        <Flex>
          <Box>Login</Box>
          <Box>Cart</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default TopSearchBar;
