'use client'

export const metadata = {
  title: "Docs | Circularity Cockpit",
  description: "Step-by-step installation guide to set up Circularity Cockpit locally with React and Vite.",
  alternates: {
    canonical: "https://circularity-cockpit.in/docs",
  },
};

import React, { useState } from 'react'
import Accordian from './Accordian'

const Docs = () => {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({})

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied({ ...copied, [id]: true })
    setTimeout(() => {
      setCopied({ ...copied, [id]: false })
    }, 2000)
  }

  const ClipboardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4H18a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2H8" />
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    </svg>
  )

  const TickIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-green-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )

  return (
    <>
      <div className="max-w-4xl mx-2 sm:mx-auto sm:mt-28 mt-20 sm:px-4 px-5 py-10">
        {/* Header */}
        <h2 className="text-sm text-gray-500 mb-2 font-JB">Installation</h2>
        <h1 className="text-4xl font-extrabold mb-2 font-JB">Circularity Cockpit</h1>
        <p className="text-gray-700 mb-6 font-JB">
          Step-by-step guide to set up Circularity Cockpit with React + Vite.
        </p>

        {/* Step 1 */}
        <div className="mb-6 sm:mt-18 mt-15">
          <div className="flex items-center space-x-2 mb-2">
            <div className="border-1 border-gray-300 text-sm font-bold px-2 py-1 font-JB rounded">1</div>
            <h2 className="text-lg ml-2 font-bold font-JB">Create project</h2>
          </div>
          <p className="text-sm text-gray-500 sm:font-semibold font-bold mb-4 mt-4 text-justify font-JB">
            Run this command to create a new React + Vite project for Circularity Cockpit:
          </p>
          <div className="bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-mono rounded-lg border text-card-foreground shadow-sm w-full">
            <span>npm create vite@latest circularity-cockpit</span>
            <button
              onClick={() => handleCopy('npm create vite@latest circularity-cockpit', 'step1')}
              className="text-gray-600 hover:text-black">
              {copied['step1'] ? TickIcon : ClipboardIcon}
            </button>
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <div className="flex items-center space-x-2 mb-3 sm:mt-15 mt-15">
            <div className="border-1 border-gray-300 text-sm font-bold px-2 py-1 font-JB rounded">2</div>
            <h2 className="text-lg ml-2 font-bold font-JB">Install dependencies</h2>
          </div>
          <div className="bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-mono rounded-lg border text-card-foreground shadow-sm w-full">
            <span>npm install</span>
            <button
              onClick={() => handleCopy('npm install', 'step2')}
              className="text-gray-600 hover:text-black">
              {copied['step2'] ? TickIcon : ClipboardIcon}
            </button>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div className="flex items-center space-x-2 mb-3 sm:mt-15 mt-15">
            <div className="border-1 border-gray-300 text-sm font-bold px-2 py-1 font-JB rounded">3</div>
            <h2 className="text-lg ml-2 font-bold font-JB">Run the app</h2>
          </div>
          <div className="bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-mono rounded-lg border text-card-foreground shadow-sm w-full">
            <span>npm run dev</span>
            <button
              onClick={() => handleCopy('npm run dev', 'step3')}
              className="text-gray-600 hover:text-black">
              {copied['step3'] ? TickIcon : ClipboardIcon}
            </button>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-6 sm:mt-10 mt-10">
          <div className="flex items-center space-x-2 mb-2">
            <div className="border-1 border-gray-300 text-sm font-bold px-2 py-1 font-JB rounded">4</div>
            <h2 className="text-lg ml-2 font-bold font-JB">Explore features</h2>
          </div>
          <p className="text-sm text-gray-500 mb-3 mt-3 font-JB sm:font-semibold font-bold">
            Once the app is running, you can access dashboards, sustainability insights, and analytics inside Circularity Cockpit.
          </p>
        </div>

        <Accordian />
      </div>
    </>
  )
}

export default Docs
