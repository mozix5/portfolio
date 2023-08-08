import React from "react";

function Services(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <div className="s-type">{props.title}</div>

        <img src={props.img} alt="srcc" />
      </div>

      <div className="s-b-text">
        <a href="#g">
          <pre>{props.content} </pre>
        </a>
      </div>
    </div>
  );
}

export default Services;
