"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import { THero } from "@/types";

const Hero = ({ banners }: { banners: THero[] }) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false
  };
  return (
    <div className="h-screen w-full absolute top-0 left-0 right-0 group overflow-x-hidden">
      <Button size="icon" className="bg-green-400 text-white absolute top-1/2 group-hover:translate-x-0 group-hover:opacity-100 -translate-y-1/2 left-4 opacity-0 -translate-x-40 transition duration-300">
        <ChevronLeft />
      </Button>
      <Button size="icon" className="bg-green-400 text-white absolute top-1/2 group-hover:translate-x-0 group-hover:opacity-100 -translate-y-1/2 right-4 opacity-0 translate-x-40 transition duration-300">
        <ChevronRight />
      </Button>

      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Slider>
    </div>
  );
};

export default Hero;
