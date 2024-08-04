"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { fetchTrendingBlogBySlug } from '@/app/_componenents/Helper';
import CommentSection from '@/app/_componenents/CommentSection/CommentSection ';

const TutorialDetails = ({ slug }) => {
  const [tutorial, setTutorial] = useState(null);

  useEffect(() => {
    const getTutorialData = async () => {
      const tutorialData = await fetchTrendingBlogBySlug(slug);
      setTutorial(tutorialData);
    };

    if (slug) {
      getTutorialData();
    }
  }, [slug]);

  if (!tutorial) {
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
    </div>;
  }

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((block, index) => {
        if (block._type === 'block') {
          return <p key={block._key} className="mb-4 text-gray-800 leading-relaxed">{block.children.map(child => child.text).join('')}</p>;
        }
        return <div key={index} className="mb-4 text-gray-800">{JSON.stringify(block)}</div>;
      });
    }
    return <p className="mb-4 text-gray-800 leading-relaxed">{content}</p>;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative">
        {tutorial.images && tutorial.images.length > 0 && (
          <img
            className="w-full object-cover"
            style={{ height: "90vh" }}
            src={urlFor(tutorial.images[0])}
            alt="tutorial"
          />
        )}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent text-white p-6 flex flex-col justify-end">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm mb-2">{new Date(tutorial.publishedAt).toLocaleDateString()}</p>
            <h1 className="text-4xl font-bold mb-2">{tutorial.title}</h1>
            <p className="text-sm">Tutorial • 4 Min</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white flex">
        <div className="w-1/4 pr-6">
          <div className="text-gray-700 mb-4">
            <p className="font-bold mb-2">Date</p>
            <p>{new Date(tutorial.publishedAt).toLocaleDateString()}</p>
          </div>
          
          <div className="text-gray-700 mb-4">
            <p className="font-bold mb-2">Instagram</p>
            <Link href='https://www.instagram.com/ghaurii_/' target='_' className='text-gray-400 italic'>@ghaurii_</Link>
          </div>
          <div className="text-gray-700 mb-4">
            <p className="font-bold mb-2">LinkedIn</p>
            <Link href='https://www.linkedin.com/in/talha-ghauri-website-developer-a366311b5/' target='_' className='text-gray-400 italic'>Talha Ghauri</Link>
          </div>
          <div className="text-gray-700 mb-4">
            <p className="font-bold mb-2">YouTube</p>
            <p>Stuffuss</p>
          </div>
        </div>
        <div className="w-3/4">
          <h2 className="text-2xl font-bold mb-4">Content</h2>
          <div className="prose lg:prose-xl">
            <p className="text-lg leading-relaxed mb-6">{renderContent(tutorial.description)}</p>
            <div className="text-lg leading-relaxed">{renderContent(tutorial.content)}</div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default TutorialDetails;