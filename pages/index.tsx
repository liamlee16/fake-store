import { Button, ButtonGroup, IconButton, Stack } from "@chakra-ui/react";
import MainLayout from "../layouts/MainLayout";

import React from "react";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/Product/ProductList";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full h-screen overflow-hidden grid grid-cols-6">
        <Sidebar />
        <div className="col-span-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded">
          <div className="mx-auto w-full">
            <Carousel />
            <Banner />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <Footer />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
