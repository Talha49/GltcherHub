"use client"
import React, { useEffect, useState } from 'react'
import HomeTut from './HomeTut'
import { fetchTrendingBlogs } from '@/app/_componenents/Helper';

const MainT = () => {

  const [pagetrendingBlogs, setPageTrendingBlogs] = useState([]);


  useEffect(() => {
    const getpageTrendingBlogs = async () => {
      try {
        const blogs = await fetchTrendingBlogs();
        console.log("TTpage",blogs); // Check the response
        setPageTrendingBlogs(blogs);
      } catch (error) {
        console.error(error);
      }
    };

    getpageTrendingBlogs();
  }, []);
  console.log("MAIN", pagetrendingBlogs)
  return (
    <div>
                  {pagetrendingBlogs && <HomeTut pagetrendingBlogs={pagetrendingBlogs} />}
             
    </div>
   )
}

export default MainT