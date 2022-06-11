import React, { useRef } from "react";

import "./arrow.css";

const Arrow = () => {
  const ref = useRef();
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button
      ref={ref}
      style={{ display: "block" }}
      onClick={topFunction}
      id="scrollToTopBtn"
      title="Go to top"
    >
      👆
    </button>
  );
};

export default Arrow;
