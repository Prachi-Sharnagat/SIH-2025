
'use client'
import React from "react";
import Working from "./Working";
import { Introduction } from "./components/ui/Introduction";
// import { CircularityCockpit } from "./components/ui/CircularityCockpit";

import ReadDocs from "./components/ui/ReadDocs";
import { TerminalDemo } from "./components/ui/TerminalDemo";
import { Cover } from "./components/ui/cover";
import { Spotlight } from "./components/ui/spotlight-new";
// import { getColors } from "@/app/lib/colors"
import { Button } from "@/components/ui/button";
import CircularityCockpit from "./components/ui/CircularityCockpit";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

export default function Home() {

  // const colorGroups = getColors();

  return (
    <>
      <div className="relative overflow-hidden sm:min-h-full min-h-full px-4">
        <Spotlight/>
        <div className="flex flex-col items-center justify-center sm:mt-40 mt-38 sm:-mb-2 -mb-10 space-y-3"> 
          <Introduction/>
        </div>

        <main className="relative z-10 flex flex-col justify-center items-center text-center px-4">
          <div className="sm:mt-15 mt-15">
            <div
              id="spacing"
              className="text-3xl sm:text-5xl text-shadow-md sm:text-shadow-lg text-nowrap font-JB font-extrabold mb-3 sm:mb-5 text-gray-800 whitespace-nowrap sm:whitespace-nowrap text-center px-4">
                Circularity Cockpit
            </div>

            <div
              id="spacing"
              className="text-2xl sm:text-7xl font-JB font-black transition duration-200 text-gray-800 flex justify-center">
              <Cover>
                <div
                  id="spacing"
                  className="text-3xl sm:text-7xl text-shadow-md text-center font-extrabold sm:text-center sm:pb-4 sm:pt-2 font-JB px-4 sm:px-5">
                    Track • Analyze • Improve
                </div>
              </Cover>
            </div>
          </div>

          
        </main>
        <Working/>
        <ReadDocs/>
         <CircularityCockpit/>
            <div className="h-auto md:hidden lg:flex flex sm:flex-row flex-col sm:justify-center sm:gap-25 justify-center items-center sm:mt-3 sm:mb-15 my-5 sm:px-23">
            <div>
              <TerminalDemo/>
             
            </div>

              <section className="text-center sm:block sm:px-4 sm:py-20 pt-10 space-y-6 bg-white text-black font-JB">
                <h1 className="text-2xl mb-2 md:text-5xl font-bold leading-tight">
                 Integrate map
                </h1><span className="text-2xl hidden sm:block md:text-5xl font-bold leading-tight">show circularity map </span> 

              <div className="flex flex-wrap items-center justify-center gap-4 sm:pt-4 pt-2">
                <Button className="bg-black text-white cursor-pointer px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-900">
                  <a href="#">Circularity Score</a>
                </Button>

                <Button variant="outline" className="text-center font-JB font-bold rounded-full border border-gray-300 bg-white sm:mt-0 px-5 py-2 text-sm text-gray-800 shadow-sm transition hover:bg-gray-100">
                  <a href="#">Explore Circularity Map</a>
                </Button>
              </div>

              <p className="max-w-xl text-sm hidden sm:block text-gray-700 pt-4 leading-relaxed mx-auto">
  
              </p>
            </section>
        </div>

      </div>
    </>
  );
}

