"use client";

import React, { useState } from "react";

import { z } from "zod";
import Image from "next/image";

const formSchema = z.object({
  prompt: z
    .string()
    .min(7, { message: "Prompt must be atleast 7 characters long!" }),
});

export default function Create() {
  const [outputImg, setOutputImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  async function onSubmit() {
    try {
      const result = formSchema.parse({ prompt });
      setLoading(true);
      const response = await fetch("/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(result),
      });
      const data = await response.json();

      if (response.status === 200) {
        setOutputImg(data.url);
        setLoading(false);
      } else {
        console.error("error");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Invalid prompt:", error.errors[0].message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="my-5 flex flex-col lg:flex-row">
      <div className="flex flex-col justify-center lg:w-1/2 px-4">
        <h1 className="text-center text-lg md:text-xl lg:text-5xl font-bold font-sans leading-9">
          Text to Image with AI Art Generator
        </h1>
        <p className="text-center px-2 text-sm text-gray-500 font-sans mt-9">
          Create awe-inspiring masterpieces effortlessly and explore the endless possibilities of AI-generated art. Enter a prompt, choose a style, and watch Imagine - AI art generator bring your ideas to life!
        </p>
        <div className="flex justify-center mt-14">
          <input
            type="text"
            placeholder="Try: A magical Disney-inspired castle"
            className="border-2 border-black rounded-3xl p-3 w-full md:w-[40vw] lg:w-[30vw] text-black"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className={`bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-3xl p-2 px-5 ml-3 flex items-center justify-center ${loading ? 'cursor-not-allowed' : ''}`}
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            ) : (
              '+ Generate'
            )}
          </button>
        </div>
      </div>

      <div className="__output min-h-[300px] lg:min-h-full lg:h-full lg:w-1/2 bg-white/5 rounded-lg relative overflow-hidden mt-10 lg:mt-0 flex justify-center items-center">
        {/* {loading ? (
          <div className="w-full h-full flex justify-center items-center text-white/70 text-center p-3">
            <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          </div>
        ) : ( */}
        {outputImg ? (
          <Image
            alt="output"
            className="w-full h-full object-contain"
            src={outputImg}
            width={300}
            height={300}
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center text-white/70 text-center p-3">
            <Image src="/head.jpg" alt="" width={1024} height={1024} />
          </div>
        )}
        {/* )} */}
      </div>
    </div>



    // <div className="my-[50px] flex flex-col lg:flex-row">
    //   <div className="flex flex-col justify-center lg:w-1/2 px-4">
    //     <h1 className="text-center text-lg md:text-xl lg:text-5xl font-bold font-sans leading-9">
    //       Text to Image with AI Art Generator
    //     </h1>
    //     <p className="text-center px-2 font-sans mt-9">
    //       Create awe-inspiring masterpieces effortlessly and explore the endless possibilities of AI-generated art. Enter a prompt, choose a style, and watch Imagine - AI art generator bring your ideas to life!
    //     </p>
    //     <div className="flex justify-center mt-14">
    //       <input
    //         type="text"
    //         placeholder="Try: A magical Disney-inspired castle"
    //         className="border-2 border-black rounded-3xl p-3 w-full md:w-[40vw] lg:w-[30vw] text-black"
    //         value={prompt}
    //         onChange={(e) => setPrompt(e.target.value)}
    //       />
    //       <button
    //         className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-3xl p-2 px-5 ml-3"
    //         onClick={onSubmit}
    //       >
    //         + Generate
    //       </button>
    //     </div>
    //   </div>

    //   <div className="__output min-h-[300px] lg:min-h-full lg:h-full lg:w-1/2 bg-white/5 rounded-lg relative overflow-hidden mt-10 lg:mt-0">
    //     {outputImg ? (
    //       <Image
    //         alt="output"
    //         className="w-full h-full object-contain"
    //         src={outputImg}
    //         width={300}
    //         height={300}
    //       />
    //     ) : (
    //       <div className="w-full h-full flex justify-center items-center text-white/70 text-center p-3">
    //         {loading ? (
    //           <div className="w-full h-full flex justify-center items-center text-white/70 text-center p-3">
    //             Loading...
    //           </div>
    //         ) : (
    //           <Image src="/head.jpg" alt="" width={1024} height={1024} />
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>


    // <div className="my-[100px] flex flex-row">
    //   <div className="flex flex-col justify-center">

    //     <h1 className="text-center text-lg md:text-xl lg:text-5xl font-bold font-sans leading-9">Text to image with AI Art</h1>
    //     <h1 className="text-center text-lg md:text-xl lg:text-5xl font-bold font-sans">Generator</h1>
    //     <p className="text-center px:[2vw] lg:px-[20vw] font-sans mt-9">Create awe-inspiring masterpieces effortlessly and explore the endless possibilities of AI generated art. Enter a prompt, choose a style, and watch Imagine - AI art generator bring your ideas to life!
    //     </p>40vw
    //     {/* imput bax horizontal align with btn */}
    //     <div className="flex justify-center mt-14">
    //       <input type="text" placeholder="Try: A magical Disney-inspired castle" className="border-2 border-black rounded-3xl p-3 md:w-[40vw] lg:w-[30vw] text-black" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
    //       <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-3xl p-2 px-5 ml-3" onClick={onSubmit}>+ Generate</button>
    //     </div>
    //   </div>

    //   <div className="__output min-h-[300px] lg:min-h-full lg:h-full flex-[1] bg-white/5 rounded-lg relative overflow-hidden mt-10">
    //     {outputImg ? (
    //       <Image
    //         alt="output"
    //         className="w-full h-full object-contain"
    //         src={outputImg}
    //         width={300}
    //         height={300}
    //       />
    //     ) : (
    //       <>
    //         <div className="w-full h-full flex justify-center items-center text-white/70 text-center p-3">
    //           Image come here
    //           <Image src="/head.jpg" alt="" width={1024} height={1024} />
    //           {loading && <div className="w-full h-full flex justify-center items-center text-white/70 text-center p-3">Loading...</div>}
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div >
  );
}
