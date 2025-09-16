import { useState } from "react"

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

 const questions = [
  {
    question: "What is the AI-driven LCA Tool?",
    answer: "It is a software platform that helps engineers and decision-makers evaluate the environmental and circularity impacts of metals like aluminium and copper across their full lifecycle."
  },
  {
    question: "Which technologies power this tool?",
    answer: "The tool is built with React + Vite + Tailwind for the frontend, and uses AI/ML models to estimate missing lifecycle data and generate sustainability insights."
  },
  {
    question: "Do I need prior expertise in LCA to use it?",
    answer: "No. The tool is designed to be user-friendly. Even with limited data, AI will help predict key parameters and generate understandable reports."
  },
  {
    question: "Can I compare traditional vs circular processes?",
    answer: "Absolutely! The dashboard lets you compare linear (raw material-based) and circular (recycled/closed-loop) pathways for metals."
  },
  {
    question: "What kind of outputs does the tool provide?",
    answer: "You’ll get interactive dashboards, circularity visualizations, and downloadable reports highlighting environmental impacts and recommendations."
  }
];


  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const DownArrow = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )

  const UpArrow = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  )

  return (
    <div className="mt-22 space-y-4">
      <h2 className="sm:text-4xl text-3xl font-bold mb-8 ml-1 font-JB">Some Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-md">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50"
          >
            <span className="font-medium text-[15px] sm:text-[15px]">{item.question}</span>
            <span className="ml-2">{openIndex === index ? UpArrow : DownArrow}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-[12px] sm:text-[14px] text-gray-600 font-JB sm:font-semibold font-bold text-justify">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}


export default Accordian;
