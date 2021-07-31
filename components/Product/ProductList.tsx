import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const products = [
    {
      thumb:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=720",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=720",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=720",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=720",
    },
  ];

  return (
    <Container className="mb-8" maxW="container.xl">
      <SimpleGrid columns={4} spacing={10}>
        {products.map((product) => {
          return <ProductItem product={product} />;
        })}
      </SimpleGrid>
    </Container>
  );
}

export default ProductList;
