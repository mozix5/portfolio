import React from "react";
import a from "../assets/dashboard.png";
import b from "../assets/todo.png";
import c from "../assets/keeper.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h1 className="p-headind">Portfolio</h1>

      <div className="p-container">
        <div className="p-box">
          <div className="overlay-text">
            <a href="deluxe-belekoy-5898d2.netlify.app/" target="blank">
              <h1>dashboard</h1>
            </a>
          </div>

          <img src={a} alt="website" />
        </div>

        <div className="p-box">
          <div className="overlay-text">
            <a href="https://reliable-bonbon-2829f3.netlify.app" target="blank">
              <h1>toDo List</h1>
            </a>
          </div>

          <img src={b} alt="website" />
        </div>

        <div className="p-box">
          <div className="overlay-text">
            <a href="https://lustrous-cupcake-736811.netlify.app/">
              <h1>Keeper App</h1>
            </a>
          </div>

          <img src={c} alt="website" />
        </div>

        {/* <div className="p-box">
          <div className="overlay-text">
            <h1>Data Structure</h1>
          </div>

          <img src="/cpro.png" alt="website" />
        </div> */}
      </div>
    </section>
  );
}
export default Portfolio;
