import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myWorks } from "../assets/MyWorks";
import { ArrowLeft, ChevronRight, Package } from "lucide-react";

const WorkDetails = () => {
  const { id } = useParams();
  const currentItem = myWorks.find((item) => item.id === id);
  const navigate = useNavigate();

  return (
    currentItem && (
      <div className="px-4 sm:px-20 py-8 sm:py-12">
        <div
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate("/#work")}
        >
          <div className="bg-white/10 border border-white/15 cursor-pointer text-white/60 w-fit py-2 px-4 rounded flex items-center gap-2 text-xs hover:bg-white/15 transition-colors">
            <ArrowLeft className="size-4" />
            Back
          </div>
          <span>
            <ChevronRight className="size-5" />
          </span>
          <p
            onClick={() => navigate("/#work")}
            className="text-white/75 hover:text-white/85 cursor-pointer text-xs sm:text-sm"
          >
            My Works
          </p>
          <span>
            <ChevronRight className="size-5" />
          </span>
          <p className="text-white/75 hover:text-white/85 cursor-pointer text-xs sm:text-sm">
            {currentItem.name}
          </p>
        </div>
        <div className="flex flex-col gap-2 w-fit mb-8">
          <h1 className="text-2xl md:text-4xl font-semibold">
            {currentItem.name}
          </h1>
          <span className="w-8 h-1 rounded-full bg-white/50"></span>
        </div>
        <p className="font-medium text-xl text-white/85  mb-4">
          {currentItem.subtitle}
        </p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
      
          <div className="flex flex-col space-y-8 order-1 md:order-2">
            <div>
              <img
                src={currentItem.imageFile}
                alt={currentItem.name}
                className="w-full h-full rounded-xl"
              />
            </div>
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

          {/* Left side (features) should come second on mobile */}
          <div className="flex flex-col space-y-4 order-2 md:order-1">
            <p className="flex flex-col space-y-4 ml-2 sm:ml-4 mt-4">
              {currentItem.features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Package className="size-6 rounded p-1 bg-white/20" />
                  <p className="text-sm text-white/70">{feature.feature}</p>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default WorkDetails;
