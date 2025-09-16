// // "use client"
// // import React from 'react'

// // const Working = () => {

// //   return (

// //     <>
    
// //         <div className='flex items-center justify-center text-center sm:mt-30 mt-25'>
// //             <h3 className='sm:font-bold font-extrabold font-JB sm:text-[48px] text-[30px] text-gray-700'>How Does it Work ?</h3>
// //         </div>
// //         <div className='flex items-center justify-center mt-8 mb-15'>
// //         <div className='w-auto h-auto flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-15 md:flex-nowrap items-center'>
            
// //             <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
// //             <div className='w-full h-[80px] rounded-2xl first'></div>
// //             <div className='w-full text-xs font-JB text-black text-center p-3'>
// //                 <span className='text-xs font-JB font-extrabold text-blue-600'>step </span>
// //             </div>
// //             </div>

// //             <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
// //             <div className='w-full h-[80px] rounded-2xl second'></div>
// //             <div className='w-full text-xs font-JB text-black text-center p-3'>
// //                 <span className='text-xs font-JB font-extrabold text-pink-600'>Copy</span> the Code
// //             </div>
// //             </div>

// //             <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
// //             <div className='w-full h-[80px] rounded-2xl third'></div>
// //             <div className='w-full text-xs font-JB text-black text-center p-3 text-nowrap'>
// //                 <span className='text-xs font-JB font-extrabold text-green-700'>Paste</span> into Project
// //             </div>
// //             </div>

// //             <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
// //             <div className='w-full h-[80px] rounded-2xl fourth'></div>
// //             <div className='w-full text-xs font-JB text-black text-center p-3'>
// //                 <span className='text-xs font-JB font-extrabold text-fuchsia-600'>Enjoy</span> the Vibe
// //             </div>
// //             </div>

// //         </div>
// //         </div>

// //     </>

// //   )
// // }

// // export default Working

// "use client"
// import React from 'react'

// const Working = () => {
//   return (
//     <>
//       {/* Title */}
//       <div className='flex items-center justify-center text-center sm:mt-30 mt-25'>
//         <h3 className='sm:font-bold font-extrabold font-JB sm:text-[48px] text-[30px] text-gray-700'>
//           How Does It Work?
//         </h3>
//       </div>

//       {/* Steps */}
//       <div className='flex items-center justify-center mt-8 mb-15'>
//         <div className='w-auto h-auto flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-15 md:flex-nowrap items-center'>
          
//           {/* Step 1 */}
//           <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
//             <div className='w-full h-[80px] rounded-2xl first'></div>
//             <div className='w-full text-xs font-JB text-black text-center p-3'>
//               <span className='text-xs font-JB font-extrabold text-blue-600'>Step 1:</span> Upload Data
//             </div>
//           </div>

//           {/* Step 2 */}
//           <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
//             <div className='w-full h-[80px] rounded-2xl second'></div>
//             <div className='w-full text-xs font-JB text-black text-center p-3'>
//               <span className='text-xs font-JB font-extrabold text-pink-600'>Step 2:</span> Analyze Lifecycle
//             </div>
//           </div>

//           {/* Step 3 */}
//           <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
//             <div className='w-full h-[80px] rounded-2xl third'></div>
//             <div className='w-full text-xs font-JB text-black text-center p-3 text-nowrap'>
//               <span className='text-xs font-JB font-extrabold text-green-700'>Step 3:</span> Get Insights
//             </div>
//           </div>

//           {/* Step 4 */}
//           <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
//             <div className='w-full h-[80px] rounded-2xl fourth'></div>
//             <div className='w-full text-xs font-JB text-black text-center p-3'>
//               <span className='text-xs font-JB font-extrabold text-fuchsia-600'>Step 4:</span> Improve Circularity
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default Working
"use client"
import React from 'react'
import { Upload, BarChart3, Lightbulb, Recycle } from "lucide-react" // icons

const Working = () => {
  return (
    <>
      {/* Title */}
      <div className='flex items-center justify-center text-center sm:mt-30 mt-25'>
        <h3 className='sm:font-bold font-extrabold font-JB sm:text-[48px] text-[30px] text-gray-700'>
          How Does It Work?
        </h3>
      </div>

      {/* Steps */}
      <div className='flex items-center justify-center mt-8 mb-15'>
        <div className='w-auto h-auto flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-15 md:flex-nowrap items-center'>
          
          {/* Step 1 */}
          <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-300 shadow-sm py-4 px-6 flex flex-col items-center'>
            <Upload size={50} className="text-blue-600 mb-3" />
            <p className='text-sm font-JB text-black text-center'>
              <span className='font-extrabold text-blue-600'>Step 1:</span> Upload Data
            </p>
          </div>

          {/* Step 2 */}
          <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-300 shadow-sm py-4 px-6 flex flex-col items-center'>
            <BarChart3 size={50} className="text-pink-600 mb-3" />
            <p className='text-sm font-JB text-black text-center'>
              <span className='font-extrabold text-pink-600'>Step 2:</span> Analyze Lifecycle
            </p>
          </div>

          {/* Step 3 */}
          <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-300 shadow-sm py-4 px-6 flex flex-col items-center'>
            <Lightbulb size={50} className="text-green-700 mb-3" />
            <p className='text-sm font-JB text-black text-center'>
              <span className='font-extrabold text-green-700'>Step 3:</span> Get Insights
            </p>
          </div>

          {/* Step 4 */}
          <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-300 shadow-sm py-4 px-6 flex flex-col items-center'>
            <Recycle size={50} className="text-fuchsia-600 mb-3" />
            <p className='text-sm font-JB text-black text-center'>
              <span className='font-extrabold text-fuchsia-600'>Step 4:</span> Improve Circularity
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Working
