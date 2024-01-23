"use client";
import { CardsContainer, Hero, Layout } from "@/components";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Layout>
        <Hero />
        <h1 className="text-3xl text-center w-full my-10">
          Photosdale's posts
        </h1>
        <CardsContainer />
      </Layout>
    </div>
  );
};

export default Home;
