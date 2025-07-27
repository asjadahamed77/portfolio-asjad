import React from "react";
import { tools } from "../assets/assets";
import { Lightbulb } from "lucide-react";

const ToolsIUsed = () => {
  return (
    <div className="px-4 sm:px-20 my-32 ">
      <div className=" xl:p-12 sm:p-8 p-4 flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="inline-flex gap-2 items-center justify-center font-semibold text-lg tracking-wide px-8 py-2.5 bg-zinc-900 rounded-full">
            <Lightbulb className="w-4 h-4" />
            My ToolKit
          </p>
          <h1 className="text-4xl font-bold tracking-wider mt-8">
            Tools & Stack I Use
          </h1>
        </div>
        <div className="flex flex-wrap mt-12 gap-2 sm:gap-4 justify-center">
          {tools.map((item, index) => (
            <div key={index} className="w-[150px] lg:w-[200px] flex items-center gap-4 p-4 ">
              <img src={item.imgFile} alt="imagefile" className="w-8 sm:max-w-16" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsIUsed;
