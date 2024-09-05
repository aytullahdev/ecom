"use client";
import React from "react"; // Add this line to import React
import { Footer } from "@/component/Footer";
import { Box } from "@mantine/core";
import Hero from "@/component/Hero";
import ProductCard from "@/component/ProductCard";
import { Grid, GridCol } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Box>Home</Box>
      <Hero />
      <Grid mt={28}>
        {[...Array(8)].map((_, index) => (
          <GridCol span={{ base: 12, md: 6, lg: 3 }} key={index}>
            <ProductCard key={index} />
          </GridCol>
        ))}
      </Grid>
      <Footer />
    </>
  );
}
