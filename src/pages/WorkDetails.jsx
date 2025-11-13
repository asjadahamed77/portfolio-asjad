import React from "react";
import { useParams } from "react-router-dom";
import { myWorks } from "../assets/MyWorks";

const WorkDetails = () => {
  const { id } = useParams();
  const currentItem = myWorks.find((item) => item.id === id);

  return (
    currentItem && (
      <div className="px-4 sm:px-20 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-2 w-fit">
              <h1 className="text-2xl md:text-4xl font-semibold">
                {currentItem.name}
              </h1>
              <span className="w-8 h-1 rounded-full bg-white/50"></span>
            </div>
            <p className="font-medium text-xl text-white/85">{currentItem.subtitle}</p>
            <p className="flex flex-col space-y-4">
              {currentItem.features?.map((feature,index)=>(
                <div key={index}>
                  <p>{feature.feature}</p>
                </div>
              ))}
            </p>
            <div>
            <h1 className="text-xl font-semibold mb-4">Technologies used</h1>
            <div className="flex items-center gap-4 flex-wrap">
              {currentItem.tools.map((tool, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-[40px] h-[40px] flex justify-center items-center rounded bg-white/5">
                    <img
                      src={tool.toolIcon}
                      alt={tool.tool}
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                  <p className="text-sm font-medium">{tool.tool}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="">
              <img
                src={currentItem.imageFile}
                alt={currentItem.name}
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
         
        </div>
      </div>
    )
  );
};

export default WorkDetails;
