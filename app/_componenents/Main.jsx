"use client"
import React, { useState, useEffect } from 'react';
import HomePage from './Home/HomePage';
import Hero from './Hero/Hero';
import { fetchTrendingBlogs } from './Helper';
import Source from './Source/Source';
import Intro from './Intro/Intro';

const Main = () => {
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  useEffect(() => {
    const getTrendingBlogs = async () => {
      const blogs = await fetchTrendingBlogs();
      setTrendingBlogs(blogs);
    };

    getTrendingBlogs();
  }, []);

  return (
    <div>
      <HomePage />
      <Intro/>
      <Hero trendingBlogs={trendingBlogs} />
     
    </div>
  );
};

export default Main;
