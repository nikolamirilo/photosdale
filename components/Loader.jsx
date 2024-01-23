import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <Audio heigth="50" width="50" color="#0275d8 " ariaLabel="loading" />
    </div>
  );
};

export default Loader;
