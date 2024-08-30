import {
  Container,
  Title,
  Text,
  Button,
  Box,
  BackgroundImage,
  Flex,
} from "@mantine/core";

export default function Hero() {
  return (
    <Box component="section" bg={"red"} h={500}>
      <BackgroundImage
        src="https://as1.ftcdn.net/v2/jpg/01/38/94/62/1000_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg"
        bgsz={"cover"}
        bgp={"center"}
        bgr={"no-repeat"}
        h={500}
      >
        <Container
          bg={"white"}
          w={{
            xs: "100%",
            sm: "400px",
          }}
          p={20}
          pos={"absolute"}
          top={"50%"}
        >
          <Title order={1}>Sell your clothes and earn money</Title>
          <Button mt={20} fullWidth variant="outline">
            Sell Now
          </Button>
        </Container>
      </BackgroundImage>
    </Box>
  );
}
