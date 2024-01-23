"use client";
import React, { useState, useEffect } from "react";
import { Loader } from "../components";

export const useLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1400));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);
  if (loading) {
    return (
      <div
        className="loader-container"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  }
};
