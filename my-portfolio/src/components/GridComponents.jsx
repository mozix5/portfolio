import React from "react";
import gridList from "../GridList";
import Services from "./Services";

function createGrid(gridList) {
  return (
    <Services
      key={gridList.id}
      title={gridList.title}
      img={gridList.img}
      content={gridList.content}
    />
  );
}
function GridComponents() {
  return (
    <section id="services">
      <div class="s-heading">
        <h1>Skills</h1>
        <p>Here Is Some Of My Skills.</p>
      </div>
      <div className="b-container">{gridList.map(createGrid)}</div>
    </section>
  );
}

export default GridComponents;
