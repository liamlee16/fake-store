import { Grid, GridItem, Container } from "@chakra-ui/react";
import React from "react";

function Banner() {
  return (
    <Container className="mb-8" maxW="container.xl">
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
            alt=""
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Banner;
