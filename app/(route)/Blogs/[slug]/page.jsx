"use client"
import React from 'react'
import BlogDetail from '../_components/BlogDetail'
import { useParams } from 'next/navigation';
import CommentSection from '@/app/_componenents/CommentSection/CommentSection ';

const Page = () => {

  const { slug } = useParams();
  
  console.log("slug",slug) 
  return (
    <div>
        <BlogDetail slug={slug}/>
       

        
        <CommentSection  slug={slug}/>
      
    </div>
  )
}

export default Page