import React from "react";

const About = (props) => {
  console.log(props);

  return (
    <div className="about">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>READ MORE</button>
    </div>
  );
};

export default About;
