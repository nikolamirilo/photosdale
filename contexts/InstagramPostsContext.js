"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import data from "../data.json";

const InstagramPostsContext = createContext(null);

export const useInstagramPosts = () => {
  return useContext(InstagramPostsContext);
};

export const InstagramPostsProvider = ({ children }) => {
  const [instagramPost, setInstagramPost] = useState([]);

  useEffect(() => {
    setInstagramPost(data.posts);
  }, [instagramPost]);

  return (
    <InstagramPostsContext.Provider value={{ instagramPost }}>
      {children}
    </InstagramPostsContext.Provider>
  );
};
