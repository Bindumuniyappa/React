import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "150vh", padding: "10px" }}>
      {/* Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "5px",
          backgroundColor: "blue",
          transition: "width 0.2s ease-out",
        }}
      ></div>

      {/* Content */}
      <h1>Scroll to see the progress bar in action!</h1>
      <p style={{ marginTop: "50vh" }}>Keep scrolling...</p>
    </div>
  );
};

export default ScrollProgress;
