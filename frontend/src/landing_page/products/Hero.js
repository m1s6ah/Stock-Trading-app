import React from "react";

function Hero() {
  return (
    <div className="container text-center p-5  ">
      <h1>Technology</h1>
      <h3 className="text-muted  mt-3 fs-5">Sleek,modern and intuitive trading platforms</h3>
      <p className='mt-3'>
        Check out our{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          investment offerings
        </a>{" "}
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </p>
    </div>
  );
}

export default Hero;
