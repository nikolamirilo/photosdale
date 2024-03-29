import React from "react";
import Post from "./Post";
import moment from "moment";
import data from "../data.json";

async function getData() {
  const res = await fetch(process.env.INSTA_API_URL);
  if (!res.ok) {
    console.log(res);
    return false;
  }
  return res.json();
}

const CardsContainer = async () => {
  const res = await getData();
  var posts = res == false ? data : res?.data;
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
