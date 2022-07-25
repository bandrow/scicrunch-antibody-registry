import React from "react";
import RestTest from "./RestTest";

const LandingTest = () => {
  return (
    <>
      <img src="/assets/icon.png" />
      <h1>Sample React application is working!</h1>
      <RestTest />
      <p>
        See api documentation <a href="/api/ui">here</a>
      </p>
    </>
  );
};

export default LandingTest;
