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
    <Flex component="section" h={500}>
      <BackgroundImage
        src="https://as1.ftcdn.net/v2/jpg/01/38/94/62/1000_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg"
        bgsz={"cover"}
        bgp={"center"}
        bgr={"no-repeat"}
        h={500}
        w={"100%"}
        pos={"relative"}

      >
        <Container
          bg={"white"}
          w={{
            xs: "80%",
            sm: "380px",
          }}
          px={{
            xs: 10,
            sm: 30,
          }}
          py={30}
          pos={"absolute"}
          top={"25%"}
          left={{
            xs: "0%",
            sm: "10%",
          }}
          style={{
            borderRadius: "10px",
          }}
          
        >
          <Title order={1} fz={{
            xs: "20px",
            sm: "28px",
          }}
          >Sell your clothes and earn money</Title>
          <Button mt={20} fullWidth>
            Sell Now
          </Button>
        </Container>
      </BackgroundImage>
    </Flex>
  );
}
