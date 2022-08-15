import React from "react";

import Projects from "../components/Sections/Projects";
import Footer from "../components/Sections/Footer"
import TopCarousel from "../components/Carousel/TopCarousel";
import LeafCarousel from "../components/Carousel/LeafCarousel";
import Favorites from "../components/Favorites";
import Subscribe from "../components/Subscribe";
import Banner from "../components/Banner";
import TopNavbar from "../components/TopNavbar"

export default function Landing() {
  return (
    <>
      <Banner />
      <TopNavbar />
      <TopCarousel />
      <Projects />
      <LeafCarousel />
      <Favorites />
      <Subscribe />
      <Footer />
    </>
  );
}


