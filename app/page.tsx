"use client";
import { showErrorNotification } from "@/utils/notifications";
import { Box, Button } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Box>
        <Button
          onClick={() => {
            showErrorNotification("hello");
          }}
        >
          Click me
        </Button>
      </Box>
    </>
  );
}
