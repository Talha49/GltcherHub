import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

const About = ({ onClose }) => {
  return (
    <div>
      <div className="flex justify-between p-2 border-b sticky top-0  bg-white">
        <div className="text-center  flex  justify-center items-center">
          <p>Home</p>
          <IoIosArrowForward size={20} className="text-gray-500" />
          <p>About</p>
          <IoIosArrowForward size={20} className="text-gray-500" />
        </div>
        <button onClick={onClose}>
          <RiCloseLargeFill size={25} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row py-8">
        <div
          className="w-full md:w-1/3 flex flex-col items-center  rounded-lg  p-6"
          style={{ height: "400px", overflowY: "auto" }}
        >
          <div className="flex justify-center items-center py-4">
            <img
              src="/t.jpg"
              alt="Profile"
              width="90"
              height="90"
              className="rounded-full border-2"
            />
          </div>
          <h1 className="text-neutral-700 font-bold text-2xl text-center">
            Talha Ghauri
          </h1>
          <p className="font-normal uppercase text-base text-neutral-700 text-center pb-4">
            Next Js Developer
          </p>
          <p className="text-sm text-neutral-600 text-center mb-4">
            Expert Website developer building high-performance static and
            dynamic web apps with speed, scalability, and innovation.
          </p>
          <div className="flex justify-center items-center gap-6 pb-4">
            <Link href={"https://www.instagram.com/ghaurii_/"} target="_">
              {" "}
              <FaInstagram className="w-6 h-6 text-yellow-400 cursor-pointer hover:scale-125" />
            </Link>
            <BsTwitter className="w-6 h-6 text-blue-400 cursor-pointer hover:scale-125" />
            <FaFacebookSquare className="w-6 h-6 text-blue-600 cursor-pointer hover:scale-125" />
            <Link
              href={
                "https://www.linkedin.com/in/talha-ghauri-website-developer-a366311b5/"
              }
              target="_"
            >
              <FaLinkedin className="w-6 h-6 text-blue-400 cursor-pointer hover:scale-125" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-6">
          <h1 className="text-xl font-semibold text-gray-600 mb-2">
          {"Welcome to Glitchy Coder - Your Ultimate Destination for Digital Trends and Coding Tutorials!"}
          </h1>
          <h1 className="text-xl font-semibold mb-4 text-gray-600">
            {"Explore the Latest Updates on Digital Trends, Technologies, and Coding Tutorials"}
          </h1>
          <p className="text-base  text-gray-700 mb-2">
{            "Get the latest updates on digital trends, technologies, and coding tutorials, and learn from experts in the field. Access source code for hands-on practice and stay ahead in the digital world."}          </p>
          <p className="text-base mb-2 text-gray-700">
            {"Explore our comprehensive platform for learning and growth, featuring step-by-step coding tutorials, blogs on digital trends, and more. Join our community of coders and stay updated on the latest developments in the digital world."}
          </p>
          <p className="text-base text-gray-700">
           {" Our platform offers a wide range of resources for coders, including  tutorials, blogs, and source code. Whether you're a beginner or an expert, we have something for everyone."}
          </p>
          <div className="mt-4">
            <h1 className="text-xl font-semibold text-gray-600">
              {"What I Offer - Latest Blogs, Tutorials, and Source Code"}
            </h1>
            <p className="mt-4 text-gray-700">
             {" Latest blogs on digital trends and technologies, step-by-step  coding tutorials, and access to source code for tutorials. Join our community today and start learning!"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-200 py-5 font-sans">
        <h2 className="font-semibold text-3xl">Subscribe to our Newsletter</h2>
        <div class="relative mt-6">
          <input
            type="email"
            placeholder="Email address"
            autocomplete="email"
            aria-label="Email address"
            class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-3 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          />
          <div class="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
            >
              <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
