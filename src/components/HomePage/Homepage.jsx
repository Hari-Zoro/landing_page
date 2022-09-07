import React from "react";
import {
  Banner,
  Categories,
  Statistics,
  Features,
  Guide_section,
  Testimonials,
  Footer,
} from "../../containers";
import "../../App.css";

function Home_page() {
  return (
    <>
      <div className="App">
        <Banner />
        <Categories />

        <div className="mid-line scale-up-center">
          <hr className="feat-line" />
        </div>

        <Statistics />

        <div className="mid-line scale-up-center">
          <hr className="feat-line" />
        </div>

        <Features />

        <div className="mid-line scale-up-center">
          <hr className="feat-line" />
        </div>

        <Guide_section />

        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Home_page;
