import React from "react";
import LoadingGif from "../images/loading.gif";

function Loading() {
  return (
    <img
      className="loading-indicator"
      alt="now loading..."
      src={LoadingGif}
      style={{ margin: "1rem" }}
    />
  );
}

export default Loading;
