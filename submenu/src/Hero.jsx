import React from "react";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas totam
            pariatur delectus eaque aperiam quisquam quia ex vitae distinctio
            minima?
          </p>
          <button className="btn">Lorem</button>
        </article>
        <article className="hero-images">
         
        </article>
      </div>
    </section>
  );
};

export default Hero;
