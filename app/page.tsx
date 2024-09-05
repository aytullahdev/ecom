import Hero from "@/component/Hero";
import ProductCard from "@/component/ProductCard";
import { Grid, GridCol } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Hero />
      <Grid mt={28}>
        {[...Array(8)].map((_, index) => (
          <GridCol span={{ base: 12, md: 6, lg: 3 }} key={index}>
            <ProductCard key={index} />
          </GridCol>
        ))}
      </Grid>

    </>
  );
}
