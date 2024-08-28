import { Text, Center, Stack } from "@mantine/core";
import { IconWarning } from "@/assets/IconWarning";

const errorsMap: {
  [key: number]: { title: string; message: string; image: JSX.Element };
} = {
  403: {
    title: "Access Denied",
    message: "You don't have access.",
    image: <IconWarning width={200} height={200} />,
  },
  500: {
    title: "Server Error!",
    message: "Internal Server Error! Please try again later.",
    image: <IconWarning width={200} height={200} />,
  },
};

export function AxiosErrorModal({ statusCode }: { statusCode: number }) {
  const error = errorsMap[statusCode];
  return (
    <Center>
      <Stack
        ta="center"
        align="center"
        style={{ position: "relative", top: -22, zIndex: 10000 }}
      >
        <Text
          size="1.75rem"
          fw={700}
          ta="center"
          variant="gradient"
          gradient={{ from: "red", to: "red", deg: 90 }}
        >
          {error.title}
        </Text>

        {error.image}

        <Text ta="center" size="lg">
          {error.message}
        </Text>
        <Text ta="center" size="sm">
          Email: email@gmail.com
        </Text>
      </Stack>
    </Center>
  );
}
