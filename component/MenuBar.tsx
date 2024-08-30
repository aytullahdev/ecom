import {
  Box,
  Divider,
  Flex,
  Group,
  NavLink,
  Popover,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
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
    <Flex gap="lg" justify={"start"} align={"center"} h="33px">
      {catagories.map((catagory, indx) => {
        return (
          <Popover position="bottom" withArrow shadow="md" key={indx}>
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
              <CategoryDropdown catagories={catagories} />
            </Popover.Dropdown>
          </Popover>
        );
      })}
    </Flex>
  );
};

export default MenuBar;

const CategoryDropdown = ({
  catagories,
}: {
  catagories: { title: string }[];
}) => {
  return (
    <SimpleGrid cols={2}>
      <Box
        style={{
          borderRight: "1px solid #e1e1e1",
        }}
      >
        {catagories.map((catagory, indx) => {
          return <NavLink key={indx} label={catagory.title} />;
        })}
      </Box>
      <SimpleGrid cols={2} spacing={"xs"} h={0}>
        {catagories.map((catagory, indx) => {
          return (
            <NavLink
              key={indx}
              w={"100%"}
              h={30}
              href="#required-for-focus"
              label={catagory.title}
            />
          );
        })}
      </SimpleGrid>
    </SimpleGrid>
  );
};
