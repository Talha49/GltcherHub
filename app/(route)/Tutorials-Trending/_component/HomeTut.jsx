"use client"
import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

const HomeTut = ({ pagetrendingBlogs }) => {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pagetrendingBlogs.map((blog) => (
        <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 md:h-64">
            {blog.images && blog.images.length > 0 && (
              <img
                className="w-full h-full object-cover"
                src={urlFor(blog.images[0]).url()}
                alt={blog.title}
              />
            )}
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500 mb-2">
              {new Date(blog.publishedAt).toLocaleDateString()}
            </p>
            <h2 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4 line-clamp-3">{blog.description}</p>
            <Link 
              href={`/Tutorials-Trending/${blog.slug.current}`}
              className="text-blue-500 hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default HomeTut;