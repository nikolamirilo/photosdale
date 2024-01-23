"use client";
import React from "react";
import Post from "./Post";
import moment from "moment";

async function getData() {
  const res = await fetch(
    "https://v1.nocodeapi.com/nikola123/instagram/ASbwEgjlBEyPTxiu"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const CardsContainer = async () => {
  const res = await getData();
  const posts = await res?.data;
  return (
    <div
      className="max-w-[1000px] mx-auto gap-2 grid grid-cols-12 grid-rows-2 px-8 my-20"
      id="posts"
    >
      {posts
        ? posts
            .filter((item) => item.media_type !== "VIDEO")
            .map((item) => {
              let date = moment(item.timestamp).subtract(10, "days").calendar();
              return (
                <Post
                  key={item.id}
                  title={`Date: ${date}`}
                  image={item.media_url}
                  text={item.caption}
                  link={item.permalink}
                />
              );
            })
        : null}
    </div>
  );
};

export default CardsContainer;
