import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = props => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, vitae
        assumenda sed nesciunt consequuntur voluptatibus quibusdam aliquid,
        esse, obcaecati quos molestias nulla illo ducimus sunt quas non dolorum
        rem modi.
      </p>
    </div>
  );
};

export default Rainbow(About);
