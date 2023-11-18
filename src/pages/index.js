import * as React from "react";
import "./index.css";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero-section/Hero";
import Section1 from "../components/sections/section1/Section1";
import Section2 from "../components/sections/section2/Section2";
import Footer from "../components/footer/Footer";
import Section3 from "../components/sections/section3/Section3";
import Section4 from "../components/sections/section4/Section4";
import Section5 from "../components/sections/section5/Section5";
import Section6 from "../components/sections/section6/Section6";
import Section7 from "../components/sections/section7/Section7";
import Section8 from "../components/sections/section8/Section8";
import Section9 from "../components/sections/section9/Section9";
import Section10 from "../components/sections/section10/Section10";
import Section11 from "../components/sections/section11/Section11";
import Section12 from "../components/sections/section12/Section12";
import Section13 from "../components/sections/section13/Section13";
export default function Home() {
  return (
    <div className="body">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Footer />
    </div>
  );
}
