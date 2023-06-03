import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Fit fingerstache organic taiyaki letterpress poutine shaman gentrify
            ramps intelligentsia. Semiotics fam four dollar toast, cardigan
            copper mug street art palo santo big mood beard listicle umami swag
            kombucha roof party polaroid. Vinyl scenester gorpcore distillery
            hot chicken hammock shoreditch drinking vinegar semiotics franzen
            everyday carry mlkshk tumblr next level.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
