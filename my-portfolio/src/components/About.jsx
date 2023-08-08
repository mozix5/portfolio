import React from "react";
import me from '../assets/me.png'
function About() {
  return (
    <section id="about">
      <div className="about-text">
        <h1>About Me</h1>
        <h2>The Mad Scientist of Code and Creativity</h2>
        <p>
          Greetings, curious souls! I'm not your average web developer - I'm
          part mad scientist, part digital artist, and full-time code
          connoisseur. I've been known to
          turn caffeine into code and dreams into pixel-perfect reality. When
          I'm not crafting websites, you might find me trying to teach my cat to
          write HTML. (No success yet, but I remain optimistic!)
        </p>
        <a href="https://www.linkedin.com/in/mosin-md-86569a202/">
          <button>View More Details</button>
        </a>
      </div>

      <div className="about-model">
        <img src={me} alt="model" />
        
      </div>
    </section>
  );
}
export default About;
