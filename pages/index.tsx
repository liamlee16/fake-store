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
        <div className="col-span-5 overflow-auto">
          <div className="mx-auto">
            <Carousel />
            <Banner />
            <ProductList />
            <Footer />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
