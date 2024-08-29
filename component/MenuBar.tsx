import { Box, Divider, Flex, Group, Popover, Text } from "@mantine/core";
import React from "react";
const catagories = [
  {
    title: "Women",
  },
  {
    title: "Men",
  },
  {
    title: "Kids",
  },
  {
    title: "Home",
  },
  {
    title: "Accessories",
  },
];
const MenuBar = () => {
  return (
    <Flex gap="lg">
      {catagories.map((catagory, indx) => {
        return (
          <Popover
            width={200}
            position="bottom"
            withArrow
            shadow="md"
            key={indx}
          >
            <Popover.Target>
              <Text
                size="sm"
                style={{
                  cursor: "pointer",
                }}
              >
                {catagory.title}
              </Text>
            </Popover.Target>
            <Popover.Dropdown>
              <Group>
                <Box>
                  <Text size="sm">Tops</Text>
                  <Text size="sm">Bottoms</Text>
                  <Text size="sm">Dresses</Text>
                  <Text size="sm">Jackets</Text>
                </Box>
                <Divider orientation="vertical" size={"xs"} />
                <Box>
                  <Text size="sm">Tops</Text>
                  <Text size="sm">Bottoms</Text>
                  <Text size="sm">Dresses</Text>
                  <Text size="sm">Jackets</Text>
                </Box>
              </Group>
            </Popover.Dropdown>
          </Popover>
        );
      })}
    </Flex>
  );
};

export default MenuBar;
