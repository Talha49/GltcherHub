"use client"
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

const Hero = ({ trendingBlogs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 1; // Change this number to display more cards per page
    const totalPages = Math.ceil(trendingBlogs.length / blogsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages ? prevPage : prevPage + 1));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
    };

    const currentBlogs = trendingBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    return (
        <div className='flex flex-col justify-center items-center gap-y-5 py-20 px-4'>
            <h1 className='text-4xl'>
                <span className='text-gray-400'>Tren</span><span className='text-gray-600'>ding</span>
            </h1>
            {currentBlogs.map((trend) => {
                const imageUrl = urlFor(trend.images && trend.images[0]).url();
                const content = trend.content?.map(item => item.children?.map(child => child.text).join(' ')).join(' ') || '';

                return (
                    <Link href='/Tutorials-Trending' key={trend._id} className="relative p-4 flex cursor-pointer bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[60rem] flex-col md:flex-row">
                        <div className="relative w-full md:w-2/5 overflow-hidden text-gray-700 bg-white rounded-t-xl md:rounded-r-none md:rounded-l-xl">
                            {imageUrl ? (
                                <div className="w-full h-64 md:h-full">
                                    <img
                                        src={imageUrl}
                                        alt="card-image"
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center w-full h-64 md:h-full bg-gray-200">
                                    <span>No Image Available</span>
                                </div>
                            )}
                        </div>
                        <div className="p-6 w-full flex flex-col">
                            <h6 className="mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                                {trend.title}
                            </h6>
                            <h4 className="mb-2 font-sans text-xl line-clamp-2 antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {trend.description}
                            </h4>
                            <p className="mb-4 font-sans text-base font-normal leading-relaxed text-gray-700 line-clamp-4 overflow-hidden">
                                {content}
                            </p>
                        </div>
                    </Link>
                );
            })}
            <div className="flex justify-center items-center mt-5 space-x-2">
                <button
                    className={`px-6 py-2 rounded-md ${currentPage === 1 ? 'text-gray-300' : 'text-blue-500'}`}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <IoArrowBackCircleOutline size={25}/>
                </button>
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index}
                            className={`cursor-pointer w-2 h-2 rounded-full ${index + 1 === currentPage ? 'bg-blue-500' : 'bg-gray-300'}`}
                            onClick={() => setCurrentPage(index + 1)}
                        ></span>
                    ))}
                </div>
                <button
                    className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'text-gray-300' : 'text-blue-500 '}`}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <IoArrowForwardCircleOutline size={25} />
                </button>
            </div>
        </div>
    );
};

export default Hero;