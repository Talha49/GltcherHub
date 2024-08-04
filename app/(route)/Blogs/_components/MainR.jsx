"use client"
import React, { useEffect, useState } from 'react';
import Homepage from './Hompage';
import { useRouter } from 'next/navigation';
import { fetchBlogs } from '@/app/_componenents/Helper';

const MainR = () => {
  const [blogData, setBlogdata] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getBlogData = async () => {
      const blogspagedata = await fetchBlogs();
      setBlogdata(blogspagedata);
    };

    getBlogData();
  }, []);

     if(!blogData){
      return <div className="text-center py-10 text-lg text-gray-700">

      <div class="section-center">
        <div class="section-path">
          <div class="globe">
            <div class="wrapper">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
       </div>
          </div>
     }
  return (
    <div>
      <Homepage blogData={blogData} onBlogClick={(slug) => router.push(`/Blogs/${slug}`)} />
      
    </div>
  );
};

export default MainR;
