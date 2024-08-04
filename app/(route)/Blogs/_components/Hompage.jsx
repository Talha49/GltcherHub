import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { IoMdArrowDropright } from 'react-icons/io';

const Homepage = ({ blogData, onBlogClick }) => {
  return (
    <section className='p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogData.map((blog) => (
          <div key={blog._id} className="cursor-pointer" onClick={() => onBlogClick(blog.slug.current)}>
            <div className="h-full border overflow-hidden rounded-lg shadow-lg">
              {blog.images && blog.images.length > 0 && (
                <img
                  className="h-44 w-full object-cover"
                  src={urlFor(blog.images[0])}
                  alt="blog"
                />
              )}
              <div className="p-4">
                <p className="text-sm text-gray-500">{new Date(blog.publishedAt).toLocaleDateString()}</p>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.category}</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog.title}</h1>
                <p className="leading-relaxed mb-3">{blog.description}</p>
                <div className="flex items-center flex-wrap">
                  <Link href={`/Blogs/${blog.slug.current}`} className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                    <IoMdArrowDropright className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homepage;
