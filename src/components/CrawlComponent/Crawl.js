import React from "react";

const Crawl = () => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        paddingTop: 25,
        height: 0,
        margin: "0 auto"
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: "0",
          width: "100%",
          height: "80%"
        }}
        title="1"
        src="https://www.youtube.com/embed/iXDnFYu91vY"
        frameBorder="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Crawl;
