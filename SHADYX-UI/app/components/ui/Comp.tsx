'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Artifacts from './Artifacts';

const Comp: React.FC = () => {
  return (
    <div className="relative sm:mt-30 mt-15 overflow-hidden flex flex-col items-center">

      {/* Text Section */}
      <div className="relative z-10 w-full sm:px-4 md:px-0 px-2 py-16 sm:ml-25 sm:mr-auto md:font-GS font-JB md:hidden lg:block sm:text-left sm:leading-tight text-center">
        <h1 className="text-2xl sm:text-left text-center md:text-[52px] sm:mt-0 mt-2 sm:ml-0 mx-3 sm:font-extrabold font-bold mb-8 sm:font-JB">
          <span className="text-2xl md:text-[48px]  sm:font-JB sm:font-extrabold text-zinc-700">Project </span>
          <span className="text-2xl md:text-[48px]  sm:font-JB bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8]">hdhs</span>
          <span className="text-2xl md:text-[48px]  sm:font-JB sm:font-extrabold text-zinc-700">and </span>
          <span className="text-2xl md:text-[48px]  sm:font-JB bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8]">Framer Motion </span>
          <br className="hidden sm:block" />
          <span className="text-2xl md:text-[48px] sm:font-JB  text-zinc-700">jhuhfs</span>
          <span className="text-2xl md:text-[48px]  sm:font-JB font-extrabold text-zinc-700 sm:inline hidden">hsgyshj</span>
        </h1>

       <motion.p
        className="font-bold sm:font-normal sm:-mt-5 -mt-5 text-sm sm:text-lg text-zinc-500 mb-8 hidden sm:block px-4 sm:px-0 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deserunt alias voluptatibus. Cumque nostrum accusamus veritatis assumenda, obcaecati suscipit autem soluta. Sunt illum sapiente harum deserunt, in architecto assumenda praesentium corporis autem ex! Nostrum modi voluptates obcaecati expedita error nihil!
      </motion.p>

      </div>
    </div>
  );
};

export default Comp;
