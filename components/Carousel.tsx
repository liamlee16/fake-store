import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselComponent() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&h=600",
    },
    {
      url: "https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&h=600",
    },
    {
      url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&h=600",
    },
    {
      url: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&h=600",
    },
    {
      url: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&h=600",
    },
  ];

  return (
    <div className="border-b mb-8">
      <Carousel
        showArrows={true}
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
        thumbWidth={150}
        autoPlay
        className="h-full w-full"
        onClickItem={(index, item) => {
          window.open("https://google.com");
        }}
      >
        {images.map((image) => {
          return (
            <div>
              <img className="cursor-pointer" src={image.url} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
