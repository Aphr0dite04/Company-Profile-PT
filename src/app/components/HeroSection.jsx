"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (

    
  <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          >
                <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Build Your New <span class="text-blue-600 dark:text-blue-400">            <TypeAnimation
              sequence={[
                "Company",
                1000,
                "Future",
                1000,
                "Solution",
                1000,
                "Innovation",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /></span></h2>


                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Maintaining Performance with Precision. Industrial Cleaning and Heat Transfer solutions built for performance</p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                </div>
                </motion.div>
            </div>
        </div>

<div className="w-full aspect-square lg:w-1/2 relative">
  <Image
    src="/img1.jpeg"
    alt="Contoh Gambar"
    fill
    className="object-cover"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
</div>


    </div>
    
  );
};

export default HeroSection;