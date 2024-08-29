import { Box, Flex } from "@mantine/core";
import React from "react";

const TopSearchBar = () => {
  return (
    <Flex justify={"space-between"} align={"center"} py="xs">
      <Box>Logo</Box>
      <Box>Search</Box>
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
